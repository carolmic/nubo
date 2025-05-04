export interface User {
	name: string;
	role_id: number;
	email: string;
	is_active: boolean;
	created_at: Date;
	account_id: string;
	id: string;
	externalToken: string;
	updated_at: Date;
}

export type UserAuthState = {
	isAuthenticated: boolean;
	user: User | null;
	loading: boolean;
	error: string | null;
};
