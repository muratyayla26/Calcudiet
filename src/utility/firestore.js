import firebase from "firebase";
//import firestore from 'firebase/firestore';
const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_KEY,
  authDomain: "fir-andapi.firebaseapp.com",
  projectId: "fir-andapi",
  storageBucket: "fir-andapi.appspot.com",
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_FIRESTORE_ID,
  measurementId: "G-BDTRNRBW5N",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);
const db = firebase.firestore();

export default db;
