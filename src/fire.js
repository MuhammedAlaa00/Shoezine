import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyB16qG4XWXdpFBsQphDMUEweob5icw8Ejg",
    authDomain: "shoesmagazin-83c75.firebaseapp.com",
    projectId: "shoesmagazin-83c75",
    storageBucket: "shoesmagazin-83c75.appspot.com",
    messagingSenderId: "377022650171",
    appId: "1:377022650171:web:b15db8bf0417715120491e"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export const auth = fire.auth()
  export default fire;
  export const firestore = firebase.firestore();