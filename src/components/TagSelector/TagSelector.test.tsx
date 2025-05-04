import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, beforeAll,vi } from "vitest";
import TagSelector from "./TagSelector";

beforeAll(() => {
    cleanup();
    global.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };

    Element.prototype.scrollIntoView = vi.fn();

    const options = ["AI", "Finance", "Health"];
    render(<TagSelector options={options} />);
  });

describe("TagSelector", () => {

  it("renders input", () => {
   
    const input = screen.getByTestId("tag-input");
    expect(input).toBeTruthy();
  });

  it("shows options when clicked", () => {
   
    const input = screen.getByTestId("tag-input");
    fireEvent.focus(input);
    expect(screen.getByText("AI")).toBeTruthy();
    expect(screen.getByText("Finance")).toBeTruthy();
  });

  it("filters options on typing", () => {
    const input = screen.getByTestId("tag-input");
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "Fin" } });
    expect(screen.getByText("Finance")).toBeTruthy();
    expect(screen.queryByText("AI")).toBeNull();
  });

  it("adds and removes tag", async () => {
    const input = screen.getByTestId("tag-input");
    fireEvent.click(input);
  
    const option = await screen.findByText("Finance");
    fireEvent.click(option);
  
    expect(screen.getByTestId("Finance")).toBeTruthy();
  
    fireEvent.click(screen.getByTestId("Finance-delete"));
    expect(screen.queryByTestId("Finance")).toBeNull();
  });
});