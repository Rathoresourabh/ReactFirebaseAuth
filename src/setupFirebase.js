import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

// create a web app in fireabse
// then get your app config object from firebase console -> settings

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);
