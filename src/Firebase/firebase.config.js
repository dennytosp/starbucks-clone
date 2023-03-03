
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBH2K9zSfzfBu4u4E8uwK56Y5hxSAFYUKc",
  authDomain: "startbucks-clone-67000.firebaseapp.com",
  projectId: "startbucks-clone-67000",
  storageBucket: "startbucks-clone-67000.appspot.com",
  messagingSenderId: "354109984101",
  appId: "1:354109984101:web:fd2d1a636a2820ebde258c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

