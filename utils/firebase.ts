import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, getDocs, doc, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBQQp-rGGpvKBn_uPZfYQLXAG2X0K9BP9Y",
    authDomain: "yvessteinbachcom.firebaseapp.com",
    projectId: "yvessteinbachcom",
    storageBucket: "yvessteinbachcom.appspot.com",
    messagingSenderId: "565570310773",
    appId: "1:565570310773:web:b7c9392e7bbe8d30e59e3c",
    measurementId: "G-D9C0BNJ9E5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage, collection, getDoc, getDocs, doc, addDoc, ref, uploadBytes, getDownloadURL };