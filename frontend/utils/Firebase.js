import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginonecart-e20b4.firebaseapp.com",
  projectId: "loginonecart-e20b4",
  storageBucket: "loginonecart-e20b4.firebasestorage.app",
  messagingSenderId: "311658838744",
  appId: "1:311658838744:web:4a19f8edd1ef790ce335ad"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const logout = async () => {
  await signOut(auth);
  localStorage.clear();
  window.location.href = "/";
}


export {auth , provider}

