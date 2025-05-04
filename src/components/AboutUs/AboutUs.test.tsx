import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AboutUs from "./AboutUs";

describe("OurServices", () => {
    it("renders correctly", () => {
        render(<AboutUs />);

        expect(screen.getByText(/About us/i)).not.toBeNull();
        expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).not.toBeNull();
        expect(screen.getByAltText(/Meeting Room/i)).not.toBeNull();
    });
});