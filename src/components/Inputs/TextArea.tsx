import { Textarea } from "@/components/ui/textarea";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
	label?: string;
	isInvalid?: boolean;
};

const TextArea = ({
	label,
	isInvalid,
	id,
	placeholder,
	value,
	required,
	onChange,
}: TextAreaProps) => {
	return (
		<div className="w-full">
			<label
				htmlFor={id}
				className="block p-1.5 text-(--color-blue-400) font-bold"
			>
				{label}
				{required ? " (required)" : ""}
			</label>
			<Textarea
				className={`w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-blue-400) resize-none ${
					isInvalid ? "border-(--color-red)" : "border-(--color-blue-400)"
				}`}
				rows={5}
				onChange={onChange}
				id={id}
				required={required}
				placeholder={placeholder}
			>
				{value}
			</Textarea>
			<span
				className={`text-(--color-red) text-xs ${isInvalid ? null : "invisible"}`}
			>
				This field is required
			</span>
		</div>
	);
};

export default TextArea;
