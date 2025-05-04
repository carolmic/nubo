import { User } from "../types/user";

export const mockUsers: User[] = [
	{
		id: "550e8400-e29b-41d4-a716-446655440000",
		account_id: "550e8400-e29b-41d4-a716-446655440001",
		name: "John Doe",
		email: "john.doe@example.com",
		role_id: 1,
		is_active: true,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		externalToken: "auth0|123456789",
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440002",
		account_id: "550e8400-e29b-41d4-a716-446655440003",
		name: "Jane Smith",
		email: "jane.smith@example.com",
		role_id: 2,
		is_active: true,
		created_at: new Date("2024-01-02"),
		updated_at: new Date("2024-01-02"),
		externalToken: "auth0|987654321",
	},
	{
		id: "550e8400-e29b-41d4-a716-446655440004",
		account_id: "550e8400-e29b-41d4-a716-446655440005",
		name: "Bob Johnson",
		email: "bob.johnson@example.com",
		role_id: 2,
		is_active: true,
		created_at: new Date("2024-01-03"),
		updated_at: new Date("2024-01-03"),
		externalToken: "auth0|456789123",
	},
];

export const getMockUserById = (id: string): User | undefined => {
	return mockUsers.find((user) => user.id === id);
};

export const getMockUserByEmail = (email: string): User | undefined => {
	return mockUsers.find((user) => user.email === email);
};
