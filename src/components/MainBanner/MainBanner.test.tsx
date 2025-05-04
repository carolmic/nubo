import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MainBanner from "./MainBanner";

describe("MainBanner", () => {
	it("renders correctly with the given title", () => {
		const testTitle = "Search Datasets";

		render(<MainBanner title={testTitle} />);

		const heading = screen.getByText(/Search Datasets/i);
		expect(heading).not.toBeNull();
	});
});