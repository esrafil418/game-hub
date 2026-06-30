import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

interface ProtectedRouteProps {
	children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
	const context = useContext(StoreContext);

	// Check if token exists or is empty string
	if (!context || !context.token) {
		return <Navigate to="/" replace />;
	}

	// If token is just whitespace, treat as invalid
	if (context.token.trim() === "") {
		return <Navigate to="/" replace />;
	}

	return <>{children}</>;
}
