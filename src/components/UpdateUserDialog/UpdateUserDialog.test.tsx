import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { UpdateUserDialog } from "./UpdateUserDialog";

describe("UpdateUserDialog", () => {

  it("does not render dialog content when closed", () => {
    const mockOnOpenChange = vi.fn();

    render(
      <UpdateUserDialog
        open={false}
        onOpenChange={mockOnOpenChange}
        title="Success!"
        description="User has been updated successfully."
      />
    );

    const title = screen.queryByText("Success!");
    expect(title).toBeNull();

    const description = screen.queryByText("User has been updated successfully.");
    expect(description).toBeNull();
  });

  it("renders title and description when open", () => {
    const mockOnOpenChange = vi.fn();

    render(
      <UpdateUserDialog
        open={true}
        onOpenChange={mockOnOpenChange}
        title="Success!"
        description="User has been updated successfully."
      />
    );

    const title = screen.queryByText("Success!");
    expect(title).not.toBeNull();

    const description = screen.queryByText("User has been updated successfully.");
    expect(description).not.toBeNull();
  });
});