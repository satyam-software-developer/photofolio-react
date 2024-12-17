import React, { useState } from "react";
import "./albumform.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Albumform({ onAlbumCreate }) {
  // State for storing the album name input by the user
  const [albumName, setAlbumName] = useState("");

  // Event handler for updating the album name state when the input field changes
  const handleInputChange = (e) => {
    setAlbumName(e.target.value);
  };

  // Event handler for creating an album when the "Create" button is clicked
  const handleCreateAlbum = () => {
    if (albumName.trim() === "") {
      // Show an error toast if the album name is empty or contains only whitespace
      toast.error("Please enter an album name");
    } else {
      // Call the onAlbumCreate function passed from the parent component with the album name
      onAlbumCreate(albumName);
      // Show a success toast after creating the album
      toast.success("Album created successfully");
      // Clear the album name input field after album creation
      setAlbumName("");
    }
  };

  // Event handler for clearing the album name input field when the "Clear" button is clicked
  const handleClear = () => {
    setAlbumName(""); // Reset the album name state to an empty string
  };

  return (
    <>
      <div className="form">
        <h1>Create an album</h1> {/* Form title */}
        <div className="input">
          <input
            type="text"
            placeholder="Album name" // Placeholder text in the input field
            value={albumName} // Bind input field value to albumName state
            onChange={handleInputChange} // Handle input changes
            autoFocus // Automatically focus the input field when the form loads
          />
          <button className="clear" onClick={handleClear}>
            Clear {/* Button to clear the input field */}
          </button>
          <button className="create" onClick={handleCreateAlbum}>
            Create {/* Button to create the album */}
          </button>
        </div>
      </div>
      <ToastContainer />{" "}
      {/* Component to display toast messages (notifications) */}
    </>
  );
}
