import { useState } from "react";
import ButtonComponent from "../Button/Button";
import TextArea from "../Inputs/TextArea";
import TextInput from "../Inputs/TextInput";
import { notifyInterest } from "@/services/mailer/notifyInterest";

const ContactForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [isFirstNameEmpty, setFirstNameEmpty] = useState(false);
	const [isEmailEmpty, setEmailEmpty] = useState(false);
	const [isMessageEmpty, setMessageEmpty] = useState(false);

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (firstName == "") setFirstNameEmpty(true);
		if (email == "") setEmailEmpty(true);
		if (message == "") setMessageEmpty(true);

		const response = await notifyInterest(firstName, lastName, email, message);
		if (response.status == 200) {
			setFirstName("");
			setLastName("");
			setEmail("");
			setMessage("");
		}
	};

	return (
		<section id="ContactForm" className="grid grid-cols-5 gap-30 w-align mb-14">
			<div className="col-span-2">
				<h1 className="text-(--color-blue-400) !font-semibold !text-3xl">
					Contact NUBO
				</h1>
				&nbsp;
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
					egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel.
					Donec vel mauris quam. Aenean dignissim lorem ut orci efficitur, id
					malesuada elit tristique.
					<br />
					<br />
					<br />
					Fusce id libero eget metus varius pretium Fusce id libero eget metus
					varius."
					<br />
					<br />
					Fusce id libero eget metus varius pretium Fusce id libero eget metus
					varius."
				</p>
			</div>
			<div className="col-span-3">
				<form className="flex flex-col" action="">
					<div className="flex gap-5">
						<TextInput
							label="First Name"
							id="contact_fname"
							value={firstName}
							onChange={(e) => {
								setFirstName(e.target.value);
								setFirstNameEmpty(false);
							}}
							isInvalid={isFirstNameEmpty}
							required
						/>
						<TextInput
							label="Last Name"
							id="contact_lname"
							value={lastName}
							onChange={(e) => {
								setLastName(e.target.value);
							}}
							required
						/>
					</div>
					<TextInput
						label="Email"
						id="contact_email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
							setEmailEmpty(false);
						}}
						isInvalid={isEmailEmpty}
						required
					/>
					<TextArea
						label="Message"
						id="contact_msg"
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
							setMessageEmpty(false);
						}}
						isInvalid={isMessageEmpty}
						required
					/>
					&nbsp;
					<ButtonComponent
						type="submit"
						text="Contact NUBO"
						onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)}
					/>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;
