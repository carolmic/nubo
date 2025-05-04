import api from "..";

export const updateUser = async (
	id: string,
	name: string,
	email: string,
	account_id: string,
	role_id: number
) => {
	const response = await api.put("/users", {
		id,
		name,
		email,
		account_id,
		role_id,
	});

	return response.data;
};