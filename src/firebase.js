
import * as firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig =  {
    apiKey: "AIzaSyAxU4lPKxT6iJX1RlyUa1aOnV2kUsv4Qos",
    authDomain: "clone-addc7.firebaseapp.com",
    databaseURL: "https://clone-addc7-default-rtdb.firebaseio.com",
    projectId: "clone-addc7",
    storageBucket: "clone-addc7.appspot.com",
    messagingSenderId: "997765554834",
    appId: "1:997765554834:web:74bbcda2f36a24171e3c4b",
    measurementId: "G-G7LFP44JJP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  


  
  const auth = firebase.auth();

  export { auth };