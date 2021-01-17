import firebase from 'firebase';
//import firestore from 'firebase/firestore';
const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRESTORE_KEY,
    authDomain: "fir-andapi.firebaseapp.com",
    projectId: "fir-andapi",
    storageBucket: "fir-andapi.appspot.com",
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_FIRESTORE_ID,
    measurementId: "G-BDTRNRBW5N"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings(settings);
  const db = firebase.firestore();

  export default db;

//firestore kaydetme

const clickHandler = () => {
    recipes.forEach( recipe => {
      db.collection("recipe").add({
        name: recipe.name,
        image: recipe.image,
        url: recipe.url,
        allergic: recipe.allergic,
        ingredients: recipe.ingredients,
        service: recipe.service,
        calory: recipe.calory,
        nutrition: recipe.nutrition
      })
    })
  }
