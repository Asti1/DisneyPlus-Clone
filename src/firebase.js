import firebase from "firebase";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/storage";
// import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBerZcsfMLrCVHtW2aYuaEr1yaU2an6FiY",
  authDomain: "disneyplus-clone-a4524.firebaseapp.com",
  projectId: "disneyplus-clone-a4524",
  storageBucket: "disneyplus-clone-a4524.appspot.com",
  messagingSenderId: "1087394819949",
  appId: "1:1087394819949:web:07117b590e4045095c7464",
  measurementId: "G-SY0ZZGCEQ8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
