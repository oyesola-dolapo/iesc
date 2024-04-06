import React, { useState, useEffect, createContext } from "react";
import { auth, db } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Login from "../Login/Login";
import AdminHome from "../AdminHome/AdminHome";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginErr(false);
      toast.success("Successfully signed in..");
    } catch (err) {
      toast.error("Failed to sign in");
      if (err.code === "auth/invalid-credential") {
        setLoginErr(true);
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const values = {
    handleEmail,
    handlePassword,
    handleSignIn,
    handleSignOut,
    loginErr,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        console.log("loggedIn")
      } else {
        setLoggedIn(false);
        console.log("logged out")
      }
    });

    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   if (loggedIn) {
  //     navigate(<Login />);
  //   } else {
  //     navigate(<AdminHome />);
  //   }
  // }, [loggedIn, navigate]);

  return (
    <AuthContext.Provider
      value={{
        handleEmail,
        handlePassword,
        handleSignIn,
        handleSignOut,
        loginErr,
        loggedIn,
      }}>
      {loggedIn ? <AdminHome /> : <Login />}
    </AuthContext.Provider>
  );
}
