import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { UserProvider } from "./contexts/UserContext";

function AppRoutes() {
	return useRoutes(routes);
}

export default function App() {
	return (
		<UserProvider>
			<Router>
				<AppRoutes />
			</Router>
		</UserProvider>
	);
}
