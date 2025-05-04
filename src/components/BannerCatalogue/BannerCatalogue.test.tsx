import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BannerCatalogue from "./BannerCatalogue";

describe("BannerCatalogue", () => {
	it("renders correctly", () => {
		render(<BannerCatalogue />);

		expect(screen.getByText(/Search for datasets/i)).not.toBeNull();
		expect(screen.getByPlaceholderText(/Add tag.../i)).not.toBeNull();
	});
});
