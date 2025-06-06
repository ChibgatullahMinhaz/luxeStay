import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpiner";

const PrivetRoutes = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }

  if (!user) {
    <Navigate to={`/`} state={location?.pathname}></Navigate>;
  }
  return children;
};

export default PrivetRoutes;
