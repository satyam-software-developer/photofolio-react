// Import the necessary functions from the Firebase SDKs
import { initializeApp } from "firebase/app"; // Import the initializeApp function to initialize the Firebase app
import { getFirestore } from "firebase/firestore"; // Import the getFirestore function to interact with Firestore database

// TODO: Add SDKs for Firebase products that you want to use
// The comment above suggests that you can add additional Firebase SDKs for other services (e.g., Authentication, Storage) if needed in the project.
// Link to the Firebase documentation for adding other libraries: https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4hkpvfy9DTh__xDlaTw9l9juKRqacuBs", // Your API key, which is used to identify your Firebase project on the web
  authDomain: "expense-2d4d3.firebaseapp.com", // The domain for Firebase Authentication
  projectId: "expense-2d4d3", // Your Firebase project ID
  storageBucket: "expense-2d4d3.appspot.com", // The URL of your Firebase storage bucket
  messagingSenderId: "1058515700250", // The unique sender ID for Firebase Cloud Messaging (FCM)
  appId: "1:1058515700250:web:0e7594f66355f92f089fa3", // The unique app ID for this Firebase project
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Initialize the Firebase app using the provided configuration object

// Export the Firestore database instance
export const db = getFirestore(app); // Get the Firestore instance associated with the initialized app and export it for use in other parts of the application
