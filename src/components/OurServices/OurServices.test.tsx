import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import OurServices from "./OurServices";

describe("OurServices", () => {
    it("renders correctly", () => {
        render(<OurServices />);

        expect(screen.getByText(/Our Services/i)).not.toBeNull();
        expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).not.toBeNull();
        expect(screen.getByAltText(/Business Data Charts/i)).not.toBeNull();
    });
});