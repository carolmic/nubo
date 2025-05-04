import { Input } from "@/components/ui/input";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	isInvalid?: boolean;
};

const TextInput = ({
	label,
	isInvalid,
	id,
	placeholder,
	required,
	value,
	onChange,
}: TextInputProps) => {
	return (
		<div className="w-full">
			<label
				htmlFor={id}
				className="block p-1.5 text-(--color-blue-400) font-bold"
			>
				{label}
				{required ? " (required)" : ""}
			</label>
			<Input
				type="text"
				id={id}
				placeholder={placeholder}
				required={required}
				onChange={onChange}
				value={value}
				className={`w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-blue-400) ${
					isInvalid ? "border-(--color-red)" : "border-(--color-blue-400)"
				}`}
			/>
			<span
				className={`text-(--color-red) text-xs ${isInvalid ? null : "invisible"}`}
			>
				This field is required
			</span>
		</div>
	);
};

export default TextInput;
