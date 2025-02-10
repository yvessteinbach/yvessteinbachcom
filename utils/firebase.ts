import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, getDocs, doc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBQQp-rGGpvKBn_uPZfYQLXAG2X0K9BP9Y",
    authDomain: "yvessteinbachcom.firebaseapp.com",
    projectId: "yvessteinbachcom",
    storageBucket: "yvessteinbachcom.firebasestorage.app",
    messagingSenderId: "565570310773",
    appId: "1:565570310773:web:b7c9392e7bbe8d30e59e3c",
    measurementId: "G-D9C0BNJ9E5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, getDoc, getDocs, doc };