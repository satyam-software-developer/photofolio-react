import React from "react";
import "./navbar.css"; // Importing the CSS file that styles the Navbar component

// Define and export the Navbar component
export default function Navbar() {
  return (
    <>
      {/* JSX fragment to contain the Navbar component's content */}
      <div className="footer">
        {/* Image element displaying a logo or icon */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/4047/4047371.png" // Source of the image
          alt="photo" // Alternative text for the image, for accessibility
        />
        {/* Span element displaying the title or brand name */}
        <span className="text">PhotoFolio</span>
      </div>
    </>
  );
}
