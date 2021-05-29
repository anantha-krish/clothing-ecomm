import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCTP4Q_X3pqOG7Go787SwDvWCkXuEYR1uM",
  authDomain: "ecom-app-ad847.firebaseapp.com",
  projectId: "ecom-app-ad847",
  storageBucket: "ecom-app-ad847.appspot.com",
  messagingSenderId: "280372117953",
  appId: "1:280372117953:web:df85a9e333ff49851d6f40",
  measurementId: "G-5FNX8CGEGF",
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;