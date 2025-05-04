import { describe, it, expect } from "vitest";

describe("an always true assertion", () => {
	it("should be equal to 2", () => {
		expect(1 + 1).toEqual(2);
	});
});
