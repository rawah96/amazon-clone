import firebase from 'firebase'
/*const firebaseConfig = {
    apiKey: "AIzaSyDfpUQENUq5U4GuE7hHGSu5xKbfxptnBWc",
    authDomain: "clone-85463.firebaseapp.com",
    databaseURL: "https://clone-85463.firebaseio.com",
    projectId: "clone-85463",
    storageBucket: "clone-85463.appspot.com",
    messagingSenderId: "795491592117",
    appId: "1:795491592117:web:7821b2594f6c40f7ab5bfc",
    measurementId: "G-6L83H8BCXQ"
  };*/

  const Firebase = firebase.initializeApp({
    apiKey: "AIzaSyDfpUQENUq5U4GuE7hHGSu5xKbfxptnBWc",
    authDomain: "clone-85463.firebaseapp.com",
    databaseURL: "https://clone-85463.firebaseio.com",
    projectId: "clone-85463",
    storageBucket: "clone-85463.appspot.com",
    messagingSenderId: "795491592117",
    appId: "1:795491592117:web:7821b2594f6c40f7ab5bfc",
    measurementId: "G-6L83H8BCXQ"
  });

  const auth = Firebase.auth();

  export {auth};