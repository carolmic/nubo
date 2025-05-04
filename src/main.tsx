import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: redirectUri,
			}}
			cacheLocation="localstorage"
			useRefreshTokens={true}
		>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</Auth0Provider>
	</StrictMode>
);
