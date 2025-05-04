import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AvatarProps = {
	imgUrl?: string;
	fallback: string;
	user: string;
};

export const MyAvatar = ({ imgUrl, fallback, user }: AvatarProps) => {
	return (
		<div className="flex gap-2 items-center rounded-lg p-2 hover:bg-(--color-blue-300) transition-colors cursor-pointer">
			<Avatar className="w-[40px] h-[40px]">
				<AvatarImage src={imgUrl} />
				<AvatarFallback className="bg-(--color-blue-300) text-xs">
					{fallback}
				</AvatarFallback>
			</Avatar>

			<img src={imgUrl} alt="Avatar" className="invisible w-0 h-0" />

			<h1 className="font-light text-base select-none">{user}</h1>
		</div>
	);
};
