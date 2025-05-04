import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const mockAuth0Config = {
	domain: "test-domain",
	clientId: "test-client-id",
	authorizationParams: {
		redirect_uri: "http://localhost:3000",
	},
};

const renderWithContext = (component: React.ReactNode) => {
	return render(
		<Auth0Provider {...mockAuth0Config}>
			<BrowserRouter>{component}</BrowserRouter>
		</Auth0Provider>
	);
};

describe("Header Component", () => {
	const mockUser = {
		id: "123",
		account_id: "456",
		email: "john@example.com",
		name: "John Doe",
		role_id: 1,
		is_active: true,
		created_at: new Date(),
		updated_at: new Date(),
		externalToken: "auth0|123",
	};

	afterEach(() => {
		cleanup();
	});

	describe("Unauthenticated State", () => {
		beforeEach(() => {
			renderWithContext(<Header />);
		});

		it("should render the logo", () => {
			const logo = screen.getByAltText("Logo");
			expect(logo).toBeDefined();
		});

		it("should render navigation links for unauthenticated users", () => {
			const services = screen.getByRole("link", { name: "Services" });
			const contact = screen.getByRole("link", { name: "Contact" });
			const about = screen.getByRole("link", { name: "About" });

			expect(services).toBeDefined();
			expect(contact).toBeDefined();
			expect(about).toBeDefined();
		});

		it("should render the login button", () => {
			const loginButton = screen.getByRole("button", { name: "Login" });
			expect(loginButton).toBeDefined();
		});

		it("should not render authenticated user elements", () => {
			const datatypes = screen.queryByRole("heading", { name: "Datatypes" });
			const datasets = screen.queryByRole("heading", { name: "My Business" });

			expect(datatypes).toBeNull();
			expect(datasets).toBeNull();
		});
	});

	describe("Authenticated State", () => {
		beforeEach(() => {
			renderWithContext(<Header user={mockUser} />);
		});

		it("should render the logo", () => {
			const logo = screen.getByAltText("Logo");
			expect(logo).toBeDefined();
		});

		it("should render navigation links for authenticated users", () => {
			const datatypes = screen.getByRole("link", { name: "Datatypes" });
			const datasets = screen.getByRole("link", { name: "My Business" });

			expect(datatypes).toBeDefined();
			expect(datasets).toBeDefined();
		});

		it("should render the user avatar with initials", () => {
			const avatar = screen.getByText("JO", {
				selector: '[data-slot="avatar-fallback"]',
			});
			expect(avatar).toBeDefined();
		});

		it("should not render unauthenticated elements", () => {
			const services = screen.queryByRole("heading", { name: "Services" });
			const contact = screen.queryByRole("heading", { name: "Contact" });
			const about = screen.queryByRole("heading", { name: "About" });
			const loginButton = screen.queryByRole("button", { name: "Login" });

			expect(services).toBeNull();
			expect(contact).toBeNull();
			expect(about).toBeNull();
			expect(loginButton).toBeNull();
		});
	});
});
