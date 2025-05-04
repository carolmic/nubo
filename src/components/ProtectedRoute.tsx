import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { Loader } from "@/components/Loader/Loader";

type ProtectedRouteProps = {
	children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <Loader />;
	}

	if (!isAuthenticated) {
		return <Navigate to="*" replace />;
	}

	return <>{children}</>;
};
