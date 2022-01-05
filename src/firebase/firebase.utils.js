import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDILTpbZmle4bE9xAI_FdNRfPlfNhT_L1A",
    authDomain: "crwn-clothing-99edc.firebaseapp.com",
    projectId: "crwn-clothing-99edc",
    storageBucket: "crwn-clothing-99edc.appspot.com",
    messagingSenderId: "85127422238",
    appId: "1:85127422238:web:9a54b66ae3fdf24fff290f",
    measurementId: "G-H3B55B6X24"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;