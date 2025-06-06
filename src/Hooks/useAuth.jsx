import React, { useContext } from "react";
import AuthContext from "../Store/Context/AuthContex";

const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};

export default useAuth;
