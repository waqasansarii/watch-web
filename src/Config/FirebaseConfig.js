import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyCMvLFKZ5pJeNcdSt0G6Qa0S3k4aMpF4Qg",
    authDomain: "watch-web-21cb7.firebaseapp.com",
    projectId: "watch-web-21cb7",
    storageBucket: "watch-web-21cb7.appspot.com",
    messagingSenderId: "381216761902",
    appId: "1:381216761902:web:e9641512797653803397bf",
    measurementId: "G-QPDHTQE861"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase