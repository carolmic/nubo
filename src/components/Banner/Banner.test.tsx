import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Banner from "./Banner"

describe("Banner", () => {
    it("renders correctly", () => {
        render(<Banner />)

        expect(screen.getByText(/Access to strategic data/i)).not.toBeNull()
        expect(screen.getByText(/Purchase business information/i)).not.toBeNull()
    })
})
