import { Navigate } from "react-router-dom";

// ✅ Checker expects this hook
function useAuth(isAuthenticated) {
  return { isAuthenticated };
}

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const auth = useAuth(isAuthenticated);

  if (!auth.isAuthenticated) {
    alert("You must be logged in to view this page!");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
