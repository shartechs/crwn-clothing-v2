import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAUi96Z601EkEds_tQyhPcQM29XAGlv954",
  authDomain: "crwn-clothing-db-e7bb9.firebaseapp.com",
  projectId: "crwn-clothing-db-e7bb9",
  storageBucket: "crwn-clothing-db-e7bb9.appspot.com",
  messagingSenderId: "921129660490",
  appId: "1:921129660490:web:099e0cd610e0955699b6b3",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
