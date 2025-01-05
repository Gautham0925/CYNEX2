import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0Xt2yO-dfC1_OHCdhayfmI9gcxG8gnS4",
  authDomain: "trail-a1c12.firebaseapp.com",
  projectId: "trail-a1c12",
  storageBucket: "trail-a1c12.appspot.com", // Corrected storage bucket
  messagingSenderId: "854054008202",
  appId: "1:854054008202:web:d54f9cfaae97102db94473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
