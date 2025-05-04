import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
	afterEach(() => {
		cleanup();
	});

	it("renders the logo and subtitle", () => {
		render(<Footer />);
		expect(screen.getByRole("heading", { name: "nubo.ai" })).toBeTruthy();
		expect(screen.getByText("Made by AGES - PUCRS")).toBeTruthy();
	});

	it("renders the location section", () => {
		render(<Footer />);
		expect(screen.getByRole("heading", { name: "Location" })).toBeTruthy();
		const locationText = screen.getByText((content) => {
			return (
				content.includes("123 Av. Ipiranga Porto") ||
				content.includes("Alegre, RS Sala 518")
			);
		});
		expect(locationText).toBeTruthy();
	});

	it("renders the contact section", () => {
		render(<Footer />);
		expect(screen.getByRole("heading", { name: "Contact" })).toBeTruthy();
		expect(screen.getByText("ages@nubo.com.br")).toBeTruthy();
		expect(screen.getByText("(+55) (xx) xxxx-xxxx")).toBeTruthy();
	});
});
