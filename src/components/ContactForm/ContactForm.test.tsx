import { render, screen } from "@testing-library/react"
import ContactForm from "./ContactForm"
import { describe, it, expect } from "vitest"

describe("ContactForm", () => {
  it("should render the component properly", () => {
    render(<ContactForm />)

    expect(screen.getByRole('heading', { level: 1 }))
    expect(screen.getByText(/Lorem/i)).not.toBeNull()

    expect(screen.getByLabelText(/First Name/i)).not.toBeNull()
    expect(screen.getByLabelText(/Last Name/i)).not.toBeNull()
    expect(screen.getByLabelText(/Email/i)).not.toBeNull()
    expect(screen.getByLabelText(/Message/i)).not.toBeNull()
  })
})
