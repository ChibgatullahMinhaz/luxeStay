import React, { useState } from "react";
import AuthContext from "../Context/AuthContex";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Service/Firebase.init";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res;
    } catch (error) {
      // toast.error(error.message)
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const singUp = async (email, password) => {
    setIsLoading(true);
    try {
      const res =  createUserWithEmailAndPassword(auth, email, password);
      return res
    } catch (error) {}
  };
  const authInfo = {
    user,
    isLoading,
    singUp,
    login,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
