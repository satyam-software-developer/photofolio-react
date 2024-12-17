// Import React and ReactDOM from their respective packages
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main CSS file for global styles
import './index.css';

// Import the main App component that serves as the root component of the application
import App from './App';

// Create a root for the React application by selecting the DOM element with the ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React application inside the root element
root.render(
  <React.StrictMode>
    {/* StrictMode is a tool for highlighting potential problems in an application */}
    <App />
  </React.StrictMode>
);

// The following code is optional and provided for performance measurement:
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
