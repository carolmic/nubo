import { useState } from "react";
import Logo from "../../assets/logo.svg";
import { User } from "../../types/user";

import ButtonComponent from "../Button/Button";
import { MyAvatar } from "../MyAvatar/MyAvatar";
import { MyAccount } from "../MyAccount/MyAccount";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
	user?: User;
};

export const Header = ({ user }: HeaderProps) => {
	const [isMyAccountOpen, setIsMyAccountOpen] = useState(false);
	const { loginWithRedirect } = useAuth0();
	const navigate = useNavigate();

	return (
		<div className="flex w-full p-11 h-24 bg-(--color-blue-200) text-(--color-white) items-center justify-between">
			<img src={Logo} alt="Logo" onClick={() => navigate("/datasets")} />
			<nav className="flex items-center gap-10 text-xl [&>a]:cursor-pointer [&>a]:hover:opacity-75 [&>a]:transition-all">
				{user ? (
					<>
						<a href="#">Datatypes</a>
						<a
							href="/mybusiness"
							onClick={(e) => {
								e.preventDefault();
								navigate("/mybusiness");
							}}
						>
							My Business
						</a>
						<div
							onClick={() => setIsMyAccountOpen(!isMyAccountOpen)}
							className="flex items-center gap-4 relative"
						>
							<MyAvatar
								fallback={user.name.substring(0, 2).toUpperCase()}
								imgUrl={""}
								user={user.name}
							/>
							{isMyAccountOpen && (
								<div className="absolute top-full right-0 mt-2">
									<MyAccount user={user} />
								</div>
							)}
						</div>
					</>
				) : (
					<>
						<a href="#OurServices">Services</a>
						<a href="#AboutUs">About</a>
						<a href="#ContactForm">Contact</a>
						<ButtonComponent
							text="Login"
							variant="secondary"
							onClick={() =>
								loginWithRedirect({
									authorizationParams: {
										prompt: "login",
									},
								})
							}
						/>
					</>
				)}
			</nav>
		</div>
	);
};
