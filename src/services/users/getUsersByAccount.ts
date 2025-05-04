import api from "..";

export const getUsersByAccount = async (accountId: string) => {
	const response = await api.get(`/users/account/${accountId}`);
	return response.data;
};
