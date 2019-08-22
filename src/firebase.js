import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDVlz3t1NmZYCiqGsg8_Y8mTpYomN8KzWQ",
    authDomain: "cryptosozluk.firebaseapp.com",
    databaseURL: "https://cryptosozluk.firebaseio.com",
    projectId: "cryptosozluk",
    storageBucket: "cryptosozluk.appspot.com",
    messagingSenderId: "680409312248",
    appId: "1:680409312248:web:c8d27f41db2a293b"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;