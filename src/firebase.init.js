import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAV07AZyTOlWF4zpdfCSSXIzT-ZEL9i3d8",
    authDomain: "wire-house-9427b.firebaseapp.com",
    projectId: "wire-house-9427b",
    storageBucket: "wire-house-9427b.appspot.com",
    messagingSenderId: "235277539431",
    appId: "1:235277539431:web:f1f18f445d4a75daf1dcc2"

    /*  apiKey: process.env.REACT_APP_apiKey,
     authDomain: process.env.REACT_APP_authDomain,
     projectId: process.env.REACT_APP_projectId,
     storageBucket: process.env.REACT_APP_storageBucket,
     messagingSenderId: process.env.REACT_APP_messagingSenderId,
     appId: process.env.REACT_APP_appId, */


};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;