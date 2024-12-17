import React, { useState, useEffect } from 'react';
import './Albumslist.css';
import Albumform from '../AlbumForm/AlbumForm';
import { db } from '../../firebaseinit';
import Imageslist from "../ImagesList/Imageslist";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';

export default function Albumslist() {
  // State to manage the visibility of the album creation form
  const [showForm, setShowForm] = useState(false);
  
  // State to store the name of the album being created
  const [albumName, setAlbumName] = useState('');
  
  // State to store the list of albums fetched from Firestore
  const [albums, setAlbums] = useState([]);
  
  // State to store the ID of the selected album
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  // useEffect to fetch albums from Firestore when the component mounts
  useEffect(() => {
    fetchAlbums();
  }, []);

  // Fetch albums from the Firestore database
  const fetchAlbums = async () => {
    const querySnapshot = await getDocs(collection(db, 'albums'));
    const albumsData = [];
    querySnapshot.forEach((doc) => {
      // Collect each album's ID and name into the albumsData array
      albumsData.push({ id: doc.id, name: doc.data().name });
    });
    // Update the albums state with the fetched data
    setAlbums(albumsData);
  };

  // Toggle the visibility of the album creation form
  const handleAddAlbum = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  // Create a new album in the Firestore database
  const handleAlbumCreate = async (name) => {
    try {
      const docRef = await addDoc(collection(db, 'albums'), {
        name: name,  // Add the album name to Firestore
      });
      setAlbumName(name); // Update the albumName state
      fetchAlbums(); // Fetch albums again to update the UI after creating a new album
    } catch (error) {
      console.error('Error creating album:', error); // Log any errors during album creation
    }
  };

  // Handle the click event when an album is clicked
  const handleAlbumClick = (albumId) => {
    setSelectedAlbumId(albumId); // Set the selected album ID
    setShowForm(false); // Hide the album creation form when an album is clicked
  };

  // Handle the click event when the back button is clicked
  const handleBackClick = () => {
    setSelectedAlbumId(null); // Deselect the album and return to the album list view
  };

  return (
    <>
      {/* Conditionally render the Albumform component if showForm is true */}
      {showForm && <Albumform onAlbumCreate={handleAlbumCreate} />}
      
      {/* Render the album list header and "Add Album" button if no album is selected */}
      {!selectedAlbumId && (
        <div className="albumslistmain">
          <h2 className="text">Your Albums</h2>
          <button className="addbtn" onClick={handleAddAlbum}>
            {showForm ? 'Cancel' : 'Add Album'}  {/* Toggle button text between "Cancel" and "Add Album" */}
          </button>
        </div>
      )}

      {/* Render the grid of albums if no album is selected and there are albums to display */}
      {!selectedAlbumId && albums.length > 0 && (
        <div className="grid">
          {albums.map((album) => (
            <div
              className="container"
              key={album.id} // Use album ID as the unique key for each album container
              onClick={() => handleAlbumClick(album.id)} // Handle album click
            >
              <img src="https://cdn-icons-png.flaticon.com/128/2659/2659360.png" alt="album" />  {/* Album icon */}
              <span>{album.name}</span> {/* Display album name */}
            </div>
          ))}
        </div>
      )}

      {/* Render the Imageslist component if an album is selected, passing the selected album ID and back click handler */}
      {selectedAlbumId && (
        <Imageslist albumId={selectedAlbumId} onBackClick={handleBackClick} />
      )}
    </>
  );
}
