import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ContractedDatasetsList } from "./ContractedDatasetsList";

describe("ContractedDatasetsList", () => {
  it("renders month headings and totals", () => {
    render(<ContractedDatasetsList />);

    const monthHeadings = screen.getAllByText(
      /January|February|March|April|May|June|July|August|September|October|November|December/i
    );
    expect(monthHeadings.length).toBeGreaterThan(0);

    const totals = screen.getAllByText(/Total:/i);
    expect(totals.length).toBeGreaterThan(0);

    const detailsLinks = screen.getAllByText("Details");
    expect(detailsLinks.length).toBeGreaterThan(0);
  });
});
