import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { AddUserDialog } from "./AddUserDialog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("AddUserDialog", () => {
	it("renders the trigger button and opens dialog on click", async () => {
		const queryClient = new QueryClient();

		render(
			<QueryClientProvider client={queryClient}>
				<AddUserDialog />
			</QueryClientProvider>
		);

		const triggerButton = screen.getAllByRole("button", { name: /add user/i })[0];
		expect(triggerButton).not.toBeNull();

		await userEvent.click(triggerButton);

		const dialogTitle = await screen.findByText(/Add New User/i);
		expect(dialogTitle).not.toBeNull();

		const nameField = screen.getByLabelText(/Name/i);
		expect(nameField).not.toBeNull();

		const emailField = screen.getByLabelText(/Email/i);
		expect(emailField).not.toBeNull();

		const passwordField = screen.getByLabelText(/Password/i);
		expect(passwordField).not.toBeNull();
	});
});
