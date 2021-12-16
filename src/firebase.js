import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDR5UDNeNLdOcXJ10sZh8oQMUlO4nW9vlc",
  authDomain: "ahj-disney-clone.firebaseapp.com",
  projectId: "ahj-disney-clone",
  storageBucket: "ahj-disney-clone.appspot.com",
  messagingSenderId: "415381924431",
  appId: "1:415381924431:web:0a7896dd6cd1eee7d0583a",
  measurementId: "G-QBZ7GJWV5C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
