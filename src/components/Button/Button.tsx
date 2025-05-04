import { Button } from "@/components/ui/button";
import { JSX } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string,
	variant?: "primary" | "secondary",
	iconBefore?: JSX.Element,
	iconAfter?: JSX.Element,
	size?: "sm" | "md" | "lg" | "xl"
};

const ButtonComponent = ({
	text,
	type,
	variant = "primary",
	onClick,
	size = "xl",
	className,
	iconBefore,
	iconAfter
}: ButtonProps) => {
	return (
		<Button
			type={type}
			onClick={onClick}
			className={`px-4 py-6 text-${size} font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer ${
				variant == "secondary"
					? "bg-(--color-white) text-(--color-blue-500) border border-(--color-blue-500) hover:bg-(--color-gray-100)"
					: "bg-(--color-blue-200) text-(--color-white) hover:bg-(--color-blue-300)"
			} ${className || ""}`}
		>
			{iconBefore}
			{text}
			{iconAfter}
		</Button>
	);
};

export default ButtonComponent;
