//authentication and firestore configuration
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_KEY,
  authDomain: process.env.REACT_APP_FIRESTORE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIRESTORE_ID,
  measurementId: process.env.REACT_APP_FIRESTORE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const authentication = firebase.auth();
