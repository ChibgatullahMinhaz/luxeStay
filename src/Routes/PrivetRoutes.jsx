import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpiner";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  
  const location = useLocation();
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};
export default PrivateRoute;