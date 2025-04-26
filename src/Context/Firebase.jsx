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

// Create Firebase context
const FirebaseContext = createContext(null);

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBlTBATO-pOcgvq87cvCd9UDzkdSQurt5I",
  authDomain: "t-shirt-ecommerce-8329d.firebaseapp.com",
  projectId: "t-shirt-ecommerce-8329d",
  storageBucket: "t-shirt-ecommerce-8329d.appspot.com",
  messagingSenderId: "454152554445",
  appId: "1:454152554445:web:277123c9fbb39b9b24e684",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

// Custom hook
export const useFirebase = () => useContext(FirebaseContext);

// Provider Component
export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Listen to login/logout
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });
  }, []);

  // Register new user
  const registerWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered:", userCredential.user);
      return { success: true, user: userCredential.user };
    } catch (err) {
      let message = "Registration failed.";
      if (err.code === "auth/email-already-in-use") {
        message = "This email is already in use.";
      } else if (err.code === "auth/weak-password") {
        message = "Password should be at least 6 characters.";
      } else if (err.code === "auth/invalid-email") {
        message = "Invalid email address.";
      }
      console.error("Registration Error:", message);
      return { success: false, message };
    }
  };

  // Login with email and password
  const logInWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      return { success: true, user: userCredential.user };
    } catch (err) {
      let message = "Login failed.";
      if (err.code === "auth/user-not-found") {
        message = "No account found with this email.";
      } else if (err.code === "auth/wrong-password") {
        message = "Incorrect password.";
      } else if (err.code === "auth/invalid-email") {
        message = "Invalid email format.";
      }
      console.error("Login Error:", message);
      return { success: false, message };
    }
  };

  // Login with Google
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google login successful:", result.user);
      return { success: true, user: result.user };
    } catch (err) {
      console.error("Google Sign-In Error:", err.message);
      return { success: false, message: "Google sign-in failed." };
    }
  };

  const isLoggedIn = !user;

  return (
    <FirebaseContext.Provider
      value={{
        registerWithEmailAndPassword,
        logInWithEmailAndPassword,
        signInWithGoogle,
        isLoggedIn,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
