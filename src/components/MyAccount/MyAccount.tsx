import { User } from "@/types/user";
import { useAuth0 } from "@auth0/auth0-react";
import { LuUser, LuUserPlus, LuCircleX } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

type MyAccountProps = {
	user: User;
};

const MyAccountItem = ({
	icon,
	text,
	onClick,
}: {
	icon: React.ReactNode;
	text: string;
	onClick: () => void;
}) => {
	return (
		<div
			onClick={onClick}
			className="flex items-center w-full gap-2 hover:bg-(--color-blue-300) pr-2 pl-2 rounded cursor-pointer"
		>
			{icon}
			<h1 className="w-full p-2 text-sm rounded cursor-pointer">{text}</h1>
		</div>
	);
};

const Divider = () => {
	return <div className="w-full h-px bg-(--color-white) opacity-20" />;
};

export const MyAccount = ({ user }: MyAccountProps) => {
	const { logout } = useAuth0();
	const navigate = useNavigate();
	return (
		<div
			className="flex flex-col z-10 gap-2 justify-start w-48 bg-(--color-blue-200) absolute top-full right-[-44px] mt-2 p-4 rounded-lg shadow-lg 
      animate-dropdown origin-top transform transition-all duration-300 ease-in-out"
		>
			<MyAccountItem
				icon={<LuUserPlus strokeWidth={2.5} />}
				text="My Account"
				onClick={() => {
					navigate("/myaccount");
				}}
			/>
			<Divider />
			{user.role_id === 1 && (
				<>
					<MyAccountItem
						icon={<LuUser strokeWidth={2.5} />}
						text="Manage Users"
						onClick={() => {
							navigate("/myusers");
						}}
					/>
					<Divider />
				</>
			)}
			<MyAccountItem
				icon={<LuCircleX strokeWidth={2.5} />}
				text="Logout"
				onClick={() => logout()}
			/>
		</div>
	);
};
