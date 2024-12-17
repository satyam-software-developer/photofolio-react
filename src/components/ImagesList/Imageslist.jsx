import React, { useEffect, useState } from "react";
import "./Imageslist.css"; // Import the associated CSS file for styling
import { db } from "../../firebaseinit"; // Import the Firestore database configuration
import { ToastContainer, toast } from "react-toastify"; // Import Toast components for notifications
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for Toast notifications

import {
  collection, // Firestore method to get a collection reference
  getDocs, // Firestore method to retrieve documents from a collection
  addDoc, // Firestore method to add a new document to a collection
  doc, // Firestore method to get a document reference
  setDoc, // Firestore method to update or set a document
  onSnapshot, // Firestore method to listen for real-time updates to a collection
  deleteDoc, // Firestore method to delete a document
  query, // Firestore method to create a query
  where, // Firestore method to filter queries
} from "firebase/firestore"; // Import Firestore methods

export default function Imageslist({ albumId, onBackClick }) {
  // React component to display and manage images within an album
  const [showForm, setShowForm] = useState(false); // State to toggle the visibility of the image form
  const [title, setTitle] = useState(""); // State to hold the title of the image
  const [imageUrl, setImageUrl] = useState(""); // State to hold the URL of the image
  const [images, setImages] = useState([]); // State to hold the list of images
  const [editImageId, setEditImageId] = useState(null); // State to hold the ID of the image being edited

  // Function to toggle the image form and reset editImageId when toggling
  const handleToggleForm = () => {
    setShowForm(!showForm);
    setEditImageId(null); // Reset editImageId when toggling the form
  };

  // Function to add a new image or update an existing image in Firestore
  const handleAddImage = async () => {
    try {
      if (editImageId) {
        // If editImageId is not null, update the existing image
        await setDoc(doc(db, "images", editImageId), {
          albumId, // Set albumId, title, and imageUrl in the document
          title,
          imageUrl,
        });
        toast.success("Image updated successfully!"); // Show a success notification
      } else {
        // Otherwise, add a new image
        await addDoc(collection(db, "images"), {
          albumId, // Set albumId, title, and imageUrl in the new document
          title,
          imageUrl,
        });
        toast.success("Image added successfully!"); // Show a success notification
      }
      // Reset form fields and editImageId after adding/updating
      setTitle("");
      setImageUrl("");
      setEditImageId(null);
    } catch (error) {
      console.error("Error adding/updating image to Firebase: ", error); // Log any errors
    }
  };

  // Function to delete an image from Firestore
  const handleDeleteImage = async (imageId) => {
    try {
      await deleteDoc(doc(db, "images", imageId)); // Delete the image document by its ID
      toast.success("Image deleted successfully!"); // Show a success notification
    } catch (error) {
      console.error("Error deleting image from Firebase: ", error); // Log any errors
    }
  };

  // Function to set up the form with the image details for editing
  const handleEditImage = (image) => {
    setTitle(image.title); // Set the title field with the image's title
    setImageUrl(image.imageUrl); // Set the imageUrl field with the image's URL
    setEditImageId(image.id); // Set editImageId with the image's ID
    setShowForm(true); // Show the form for editing
  };

  // Effect to fetch and listen to changes in the images collection for the selected album
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "images"),
      (querySnapshot) => {
        const imagesData = querySnapshot.docs
          .filter((doc) => doc.data().albumId === albumId) // Filter images by albumId
          .map((doc) => ({
            id: doc.id, // Map each document to an image object with ID and data
            ...doc.data(),
          }));
        setImages(imagesData); // Update the images state with the fetched data
      }
    );

    return () => {
      unsubscribe(); // Cleanup the subscription when the component unmounts
    };
  }, [albumId]); // Run the effect when the albumId changes

  return (
    <>
      <div className="imageslistmain">
        {showForm && (
          <div className="imageslistform">
            {/* Display a form for adding or editing an image */}
            <h1>{editImageId ? "Edit Image" : "Add Image to Album"}</h1>
            <input
              type="text"
              placeholder="Title"
              className="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)} // Update title state on change
              autoFocus
            />
            <input
              type="text"
              className="imgurl"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)} // Update imageUrl state on change
            />
            <div className="imageslistbtn">
              <button
                className="clear"
                onClick={() => {
                  setTitle(""); // Clear the title field
                  setImageUrl(""); // Clear the imageUrl field
                  setEditImageId(null); // Reset editImageId
                }}
              >
                Clear
              </button>
              <button className="add" onClick={handleAddImage}>
                {editImageId ? "Update" : "Add"}{" "}
                {/* Change button text based on edit mode */}
              </button>
            </div>
          </div>
        )}

        <div className="top">
          {/* Top section with back button, heading, and add image button */}
          <img
            src="https://cdn-icons-png.flaticon.com/128/2099/2099238.png"
            alt="back"
            className="back"
            onClick={onBackClick} // Invoke the onBackClick callback when the back button is clicked
          />
          <h1>
            {images.length === 0 ? `No images in Album ` : `Images in Album`}
          </h1>
          <button className="addingimg" onClick={handleToggleForm}>
            {showForm ? "Cancel" : "Add Image"} {/* Toggle button text */}
          </button>
        </div>

        <div className="showimg">
          {/* Display images in the album */}
          {images.map((image, index) => (
            <div className="bottom">
              <div key={image.id} className="card">
                <div className="hover">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png"
                    alt="edit"
                    className="edit"
                    onClick={() => handleEditImage(image)} // Set up the form for editing on click
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                    alt="delete"
                    className="delete"
                    onClick={() => handleDeleteImage(image.id)} // Delete the image on click
                  />
                </div>
                <img src={image.imageUrl} alt="" className="bottomimg" />{" "}
                {/* Display the image */}
                <h1>{image.title}</h1> {/* Display the image title */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />{" "}
      {/* Include ToastContainer to display toast notifications */}
    </>
  );
}
