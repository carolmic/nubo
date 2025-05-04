import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MyAccount } from "./MyAccount";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const mockAuth0Config = {
	domain: "test-domain",
	clientId: "test-client-id",
	authorizationParams: {
		redirect_uri: "http://localhost:3000",
	},
};

const renderWithRouter = (component: React.ReactNode) => {
	return render(
		<Auth0Provider {...mockAuth0Config}>
			<BrowserRouter>{component}</BrowserRouter>
		</Auth0Provider>
	);
};

describe("MyAccount", () => {
	const mockUser = {
		id: "1",
		account_id: "acc_123",
		name: "Test User",
		email: "test@example.com",
		role_id: 2,
		is_active: true,
		created_at: new Date(),
		updated_at: new Date(),
		externalToken: "auth0|123",
	};

	const mockAdminUser = {
		...mockUser,
		role_id: 1,
	};

	beforeEach(() => {
		cleanup(); // Clean up after each test
	});

	it("renders basic user menu items correctly", () => {
		renderWithRouter(<MyAccount user={mockUser} />);

		expect(screen.getByText("My Account")).toBeDefined();
		expect(screen.getByText("Logout")).toBeDefined();
		expect(screen.queryByText("Manage Users")).toBeNull();
	});

	it("renders admin menu items when user is admin", () => {
		const { container } = renderWithRouter(<MyAccount user={mockAdminUser} />);

		// Use container to scope our queries
		const myAccountElements = container.querySelectorAll("h1");
		expect(myAccountElements.length).toBeGreaterThan(1); // Should find multiple h1 elements
		expect(screen.getByText("Manage Users")).toBeDefined();
		expect(screen.getByText("Logout")).toBeDefined();
	});

	it("renders all icons correctly", () => {
		const { container } = renderWithRouter(<MyAccount user={mockAdminUser} />);

		// Count SVG elements within this specific render
		const icons = container.querySelectorAll("svg");
		expect(icons.length).toBe(3); // UserPlus, User, and CircleX icons
	});

	it("renders dividers correctly", () => {
		const { container } = renderWithRouter(<MyAccount user={mockAdminUser} />);

		// Count dividers within this specific render
		const dividers = container.querySelectorAll(".h-px");
		expect(dividers.length).toBe(2);
	});

	it("applies correct styling to menu items on hover", () => {
		const { container } = renderWithRouter(<MyAccount user={mockUser} />);

		const menuItems = container.querySelectorAll(
			".hover\\:bg-\\(--color-blue-300\\)"
		);
		expect(menuItems.length).toBeGreaterThan(0);
	});

	it("positions the menu correctly with absolute positioning", () => {
		const { container } = renderWithRouter(<MyAccount user={mockUser} />);

		const menu = container.firstChild as HTMLElement;
		expect(menu.classList.contains("absolute")).toBe(true);
		expect(menu.classList.contains("top-full")).toBe(true);
		expect(menu.classList.contains("right-[-44px]")).toBe(true);
	});
});
