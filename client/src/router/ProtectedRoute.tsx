import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LoadingScreen } from "../components/ui/LoadingScreen";

export const ProtectedRoute = () => {

  const { user, loading } = useAuth();


  if (loading) {
    return <LoadingScreen />;
  }


  if (!user) {
    return <Navigate to="/" replace />;
  }


  return <Outlet />;
};