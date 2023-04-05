import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB65HCO2QTsJ22o5egpxZLsJuqZPsdRkdQ",
  authDomain: "linkedin-clone-tee.firebaseapp.com",
  projectId: "linkedin-clone-tee",
  storageBucket: "linkedin-clone-tee.appspot.com",
  messagingSenderId: "471550244840",
  appId: "1:471550244840:web:8e639cb7a5789e5546165d"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
const auth = firebase.auth();
  

export { db, auth }; 