# PhotoFolio

PhotoFolio is a React application that allows users to create and manage photo albums. Users can add albums, upload images to albums, and view the images in a grid format.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Code Overview](#code-overview)
- [License](#license)

## Features

- **Create Albums**: Users can create new photo albums.
- **Manage Images**: Users can add, edit, and delete images within albums.
- **View Albums and Images**: Users can view a list of albums and the images contained in each album.

## Technologies Used

- **React**: For building the user interface.
- **Firebase**: For backend services including Firestore for data storage.
- **React Toastify**: For displaying toast notifications.
- **CSS**: For styling the application.

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/satyam-software-developer/photofolio-react.git
   cd photofolio
   ```

## Code Overview

1. \*\*src/App.js
   The main component that includes the Navbar, Albumslist, and Imageslist components. It acts as the entry point of the application.

2. src/components/AlbumForm/AlbumForm.js
   A component for creating new albums. It uses a form to gather album details and interacts with Firebase Firestore to add new albums.

3. src/components/AlbumsList/Albumslist.js
   Displays a list of albums. Users can toggle the visibility of the album creation form and view a grid of existing albums. It also handles selecting an album to view its images.

4. src/components/ImagesList/Imageslist.js
   Manages and displays images within a selected album. Users can add, edit, or delete images. It also includes a form for adding new images.

5. src/firebaseinit.js
   Contains Firebase initialization and configuration. This file sets up the Firestore database for use within the application.

6. src/index.js
   The entry point of the React application. It renders the App component into the root element of the HTML file and includes setup for React's Strict Mode.

7. src/index.css
   G lobal styles for the application, including font settings and basic styling for code elements.

8. src/components/Navbar/navbar.css
   Styles for the navigation bar, which is currently used as a footer with a logo and application name.

9. src/components/ImagesList/Imageslist.css
   Styles for the images list component, including layout and button styling.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
