import api from "..";

export const addUser = async (
	email: string,
	password: string,
	name: string
) => {
	const response = await api.post("/users/auth0", {
		email,
		password,
		name,
		account_id: "956beddc-6f85-4f07-9ada-20345429261e",
		role_id: 2,
	});

	return response.data;
};
