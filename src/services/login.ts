import api from ".";

export async function login(email: string) {
	const response = await api.get(`/users/email/${email}`);
	return response.data;
}
