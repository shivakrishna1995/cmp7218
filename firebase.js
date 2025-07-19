import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDgIt8OfCmvphI61UtBKW7grMk4jNjl_hU",
    authDomain: "cmp7218-980e4.firebaseapp.com",
    projectId: "cmp7218-980e4",
    storageBucket: "cmp7218-980e4.firebasestorage.app",
    messagingSenderId: "763166968384",
    appId: "1:763166968384:web:2bc4f246c78e4c4c916da5",
    measurementId: "G-VCZHXKKC6M"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };