import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    alert("You must be log in to view this page!");
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
