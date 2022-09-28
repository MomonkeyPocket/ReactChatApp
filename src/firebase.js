import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD7g0Zay_6PAsz0SXwNWoLxRPV46I1YEdk",
    authDomain: "sample-chat-app-8e6f3.firebaseapp.com",
    projectId: "sample-chat-app-8e6f3",
    storageBucket: "sample-chat-app-8e6f3.appspot.com",
    messagingSenderId: "1043739495848",
    appId: "1:1043739495848:web:5ea8daa1255305ce29a19d"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };