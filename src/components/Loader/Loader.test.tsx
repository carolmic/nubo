import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { Loader } from "./Loader";

describe("Loader", () => {
	it("renders the loader component", () => {
		render(<Loader />);

		// Check if the main container is rendered
		const container = screen.getByTestId("loader-container");
		expect(container).toBeInTheDocument();

		// Check if the spinner is rendered
		const spinner = screen.getByTestId("loader-spinner");
		expect(spinner).toBeInTheDocument();
		expect(spinner).toHaveClass("animate-spin");

		// Check if the loading text is rendered
		const loadingText = screen.getByText("Loading...");
		expect(loadingText).toBeInTheDocument();
	});
});
