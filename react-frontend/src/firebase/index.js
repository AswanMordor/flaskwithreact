import * as firebase from 'firebase';
import 'firebase/storage';

  var firebaseConfig = {
    apiKey: "AIzaSyDFfbMOd0rzQbt3bhnn7h-oauHQu2JuSVY",
    authDomain: "fitfinder-3e49c.firebaseapp.com",
    databaseURL: "https://fitfinder-3e49c.firebaseio.com",
    projectId: "fitfinder-3e49c",
    storageBucket: "fitfinder-3e49c.appspot.com",
    messagingSenderId: "303945530497",
    appId: "1:303945530497:web:9cb30e71e5efe8afbb6180",
    measurementId: "G-DZFKXJF3BJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const storage = firebase.storage();

  export {
    storage, firebase as default
  }