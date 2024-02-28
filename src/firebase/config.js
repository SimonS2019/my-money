import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWetvFLHoyvyEpcUhE5VeG4ORJ_AwMJwc",
  authDomain: "my-money-6d1d0.firebaseapp.com",
  projectId: "my-money-6d1d0",
  storageBucket: "my-money-6d1d0.appspot.com",
  messagingSenderId: "191569265514",
  appId: "1:191569265514:web:e5091263b4be35d93edb13",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth }