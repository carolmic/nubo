import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DescriptionSection from "./DescriptionSection";

describe("DescriptionSection", () => {
  it("renders heading and paragraph correctly", () => {
    render(<DescriptionSection />);
    const heading = screen.getByText(/Description/i);
    expect(heading).not.toBeNull();

    const paragraph = screen.getByText(/Lorem ipsum/i);
    expect(paragraph).not.toBeNull();
  });
});
