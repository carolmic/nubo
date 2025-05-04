import { render, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import FileTypeSelector from "./FileTypeSelector"

describe("FileTypeSelector", () => {
  it("renderiza os tipos de arquivo corretamente", () => {
    const { getAllByText } = render(<FileTypeSelector />)

    expect(getAllByText("CSV")).not.toBeNull()
    expect(getAllByText("JSON")).not.toBeNull()
    expect(getAllByText("TXT")).not.toBeNull()
  })

  it("altera o tipo de arquivo selecionado ao clicar", () => {
    const { getAllByText } = render(<FileTypeSelector />)

    const csv = getAllByText("CSV")
    const json = getAllByText("JSON")

    expect(csv[0].classList).toContain("opacity-60")
    expect(json[0].classList).toContain("opacity-60")

    fireEvent.click(csv[0])
    expect(csv[0].classList).toContain("opacity-100")
    expect(json[0].classList).toContain("opacity-60")

    fireEvent.click(json[0])
    expect(csv[0].classList).toContain("opacity-60")
    expect(json[0].classList).toContain("opacity-100")
  })
})
