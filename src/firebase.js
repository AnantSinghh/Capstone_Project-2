import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGj6FC2aCYcgLc89GjUGdlrCOBjCCoH-A",
  authDomain: "flavourhunt-ce6c4.firebaseapp.com",
  projectId: "flavourhunt-ce6c4",
  storageBucket: "flavourhunt-ce6c4.appspot.com",
  messagingSenderId: "182565626365",
  appId: "1:182565626365:web:0eb61a40a7bbac1c7bb994"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
