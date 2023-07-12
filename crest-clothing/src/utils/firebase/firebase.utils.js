// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCktPmUdJMmpA8a28erYF65QBv2fvQSEjY",
  authDomain: "crest-clothing-db.firebaseapp.com",
  projectId: "crest-clothing-db",
  storageBucket: "crest-clothing-db.appspot.com",
  messagingSenderId: "575732524423",
  appId: "1:575732524423:web:a13f23f2e009031a9d5f22"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);