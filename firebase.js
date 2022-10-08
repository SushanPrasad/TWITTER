// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA099PgUXB2R4_JtUTDCvP27Lb2nP_7Zns",
  authDomain: "twittersuji-868f9.firebaseapp.com",
  projectId: "twittersuji-868f9",
  storageBucket: "twittersuji-868f9.appspot.com",
  messagingSenderId: "819589946397",
  appId: "1:819589946397:web:bb3492c40676b0bb533af4",
  measurementId: "G-DVS9YX1JWK"
};




   const firebaseApp = firebase.initializeApp (firebaseConfig);
   console.log('firebase;;;;',firebaseApp)
   const db = firebaseApp.firestore();
   const auth = firebase.auth();
   const provider = new firebase.auth.GoogleAuthProvider();

   export  { auth, provider};
   
   export default db;