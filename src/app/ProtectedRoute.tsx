import Path from "@/common/path";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { data, isLoading, isError } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <Navigate to={Path.Home} replace />;
  }

  return <>{children}</>;
}
