import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { login } from "@/services/login";
import { User } from "@/types/user";

interface UserContextType {
	user: User | undefined;
	isLoading: boolean;
	error: Error | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
	const { user: userAuth, isLoading: authLoading, isAuthenticated } = useAuth0();

	const {
		data: user,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["user"],
		queryFn: () => login(userAuth?.email || ""),
		enabled: !!userAuth?.email && isAuthenticated && !authLoading,
	});

	const finalLoading = isLoading || authLoading;

	return (
		<UserContext.Provider value={{ user, isLoading: finalLoading, error }}>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
}
