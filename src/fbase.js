import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";



// Your web app's Firebase configuration
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBY71oc96AOgUbYUQIzmgagj0dpWXLgNG4",
    authDomain: "nwitter-18f1c.firebaseapp.com",
    projectId: "nwitter-18f1c",
    storageBucket: "nwitter-18f1c.appspot.com",
    messagingSenderId: "504209506158",
    appId: "1:504209506158:web:e27034d8734f40c1778b7f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
