import { render, screen, cleanup } from "@testing-library/react"
import { afterEach, describe, it, expect } from "vitest"
import { MyAvatar } from "./MyAvatar"

afterEach(() => {
    cleanup()
})

describe("MyAvatar Component", () => {
    it("renders the user name", () => {
        render(<MyAvatar user="John Doe" fallback="JD" />)
        expect(screen.getByText("John Doe")).not.toBeNull()
    })

    it("renders the fallback text when no image is provided", () => {
        render(<MyAvatar user="Jane Doe" fallback="JD" />)
        expect(screen.getByText("JD")).not.toBeNull()
    })

    it("renders the image when imgUrl is provided", () => {
        render(<MyAvatar user="Miguel" fallback="M" imgUrl="https://example.com/avatar.jpg" />)
        const image = screen.getByAltText("Avatar")
        expect(image.getAttribute('src')).toBe("https://example.com/avatar.jpg")
    })
})
