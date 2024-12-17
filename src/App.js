
// export default App;
// Importing necessary components from their respective file paths
import Navbar from "./components/Navbar"; // Importing the Navbar component
import Albumslist from "./components/AlbumsList/AlbumsList"; // Importing the Albumslist component


// Defining the main App component
function App() {
  return (
    <>
      {/* Rendering the Navbar component */}
      <Navbar />

      {/* The Albumform component is commented out and not currently rendered */}
      {/* <Albumform /> */}

      {/* Rendering the Albumslist component */}
      <Albumslist />

      {/* The Imageslist component is also commented out and not currently rendered */}
      {/* <Imageslist /> */}
    </>
  );
}

// Exporting the App component as the default export from this module
export default App;
