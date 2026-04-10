import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return <Navigate to="/" />; // 👈 home par mokli dese
  }

  return children;
};

export default ProtectedRoute;