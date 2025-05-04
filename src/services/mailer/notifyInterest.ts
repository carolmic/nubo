import api from "..";

export const notifyInterest = async (
	client_first_name: string,
	client_last_name: string,
	email: string,
	message: string
) => {
	const response = await api.post("/mailer/notify-interest", {
		client_first_name,
		client_last_name,
		email,
		message,
	});
	return response.data;
};
