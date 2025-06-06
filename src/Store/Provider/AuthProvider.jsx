import React from "react";
import AuthContext from "../Context/AuthContex";

const AuthProvider = ({ children }) => {
  const authInfo = {
    email: "minhaz",
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
