import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import DatasetsTableRow from "./DatasetsTableRow"

const mockProps = {
  name: "Dataset 1",
  desc: "This is a test dataset",
  price: 100,
  expanded: false,
  isPair: false,
  toggleExpand: vi.fn()
}

describe("DatasetsTableRow", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    cleanup()
  })

  it("renders row with correct data", () => {
    render(<DatasetsTableRow {...mockProps} />)

    expect(screen.getByText("Dataset 1")).not.toBeNull()
    expect(screen.getByText("This is a test dataset")).not.toBeNull()
    expect(screen.getByText("Details")).not.toBeNull()
  })

  it("calls toggleExpand when dropdown is clicked", () => {
    render(<DatasetsTableRow {...mockProps} />)

    const dropdown = screen.getByRole("img")
    fireEvent.click(dropdown)

    expect(mockProps.toggleExpand).toHaveBeenCalled()
  })

  it("applies expanded styles when expanded is true", () => {
    render(<DatasetsTableRow {...mockProps} expanded={true} />)

    const row = screen.getByRole("row")
    expect(row.classList).toContain("bg-(--color-gray-200)")
  })

  it("applies collapsed styles when expanded is false", () => {
    render(<DatasetsTableRow {...mockProps} expanded={false} />)

    const row = screen.getByRole("row")
    expect(row.classList).toContain("bg-(--color-gray-200)")
  })
})
