import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB-nB9NR9MDdsKyGBtr5FU81TpSk-q_Nqk",
    authDomain: "facebook-clone-6958a.firebaseapp.com",
    databaseURL: "https://facebook-clone-6958a.firebaseio.com",
    projectId: "facebook-clone-6958a",
    storageBucket: "facebook-clone-6958a.appspot.com",
    messagingSenderId: "544281039910",
    appId: "1:544281039910:web:d779122c2cfb1c58bec2e7",
    measurementId: "G-X011Y451VR"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;