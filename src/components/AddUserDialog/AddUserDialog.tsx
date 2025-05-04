import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import TextInput from "@/components/Inputs/TextInput";
import ButtonComponent from "../Button/Button";
import { useState } from "react";
import { addUser } from "@/services/users/addUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function AddUserDialog() {
	const [open, setOpen] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: () => addUser(email, password, name),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
			setOpen(false);
			setName("");
			setEmail("");
			setPassword("");
		},
		onError: (err) => {
			console.error("Erro ao adicionar usuário:", err);
		},
	});

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<ButtonComponent
					variant="primary"
					text="Add user"
					iconAfter={<Plus className="ml-2 w-4 h-4" />}
				/>
			</DialogTrigger>

			<DialogContent className="max-w-lg rounded-2xl p-8 border border-gray-200 shadow-md">
				<DialogTitle className="text-2xl font-bold text-[#0b3a53]">
					Add New User
				</DialogTitle>
				<DialogDescription className="text-md text-[#0b3a53]">
					Company: HP Enterprise
				</DialogDescription>

				<form
					className="flex flex-col gap-0 pt-0"
					onSubmit={(e) => {
						e.preventDefault();
						mutation.mutate();
					}}
				>
					<TextInput
						label="Name"
						id="name"
						placeholder="Name here"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

					<TextInput
						label="Email"
						id="email"
						placeholder="Email here"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<TextInput
						label="Password"
						id="password"
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<div className="flex justify-end pt-6">
						<ButtonComponent
							variant="primary"
							type="submit"
							text="Add user"
							iconAfter={<Plus className="ml-2 w-4 h-4" />}
							size="sm"
							disabled={mutation.isPending}
						/>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}
