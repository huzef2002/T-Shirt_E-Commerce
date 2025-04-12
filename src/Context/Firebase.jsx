import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,

} from "firebase/auth";


const firebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyDthQm26TcK-E3xlZ2ZivEnbFEPO7lmrTk",
    authDomain: "login-form-b6539.firebaseapp.com",
    projectId: "login-form-b6539",
    storageBucket: "login-form-b6539.firebasestorage.app",
    messagingSenderId: "635965871564",
    appId: "1:635965871564:web:26b086f0fc7d096ab4b969"
};

const firebaseApp = initializeApp(firebaseConfig);

export const useFirebase = () => useContext(firebaseContext);

const auth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();



export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) setUser(user);
            else setUser(null);

        });
    }, []);

    const registerWithUseAndEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            // .then()
            .catch("Error")
    }

    const logInWithEmailAndPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .catch("Error")
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
    }

    const isLogIn = user ? true : false;

    return (
        <firebaseContext.Provider value={{ registerWithUseAndEmail, logInWithEmailAndPass, signInWithGoogle, isLogIn }} >
            {props.children}
        </firebaseContext.Provider>
    );
}