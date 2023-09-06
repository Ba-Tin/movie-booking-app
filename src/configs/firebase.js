
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBy8zyGkpQsbT2CcB5B2ihjqIeFIwOw7g4",
    authDomain: "movie-booking-14150.firebaseapp.com",
    projectId: "movie-booking-14150",
    storageBucket: "movie-booking-14150.appspot.com",
    messagingSenderId: "992054177305",
    appId: "1:992054177305:web:cdbf472676b05b5f704488",
    measurementId: "G-BQLQY2KCP8"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
