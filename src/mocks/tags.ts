import { v4 as uuidv4 } from "uuid";

export interface Tag {
	id: string;
	name: string;
	description: string;
	color: string;
	createdAt: Date;
	updatedAt: Date;
}

export const mockTags: Tag[] = [
	{
		id: uuidv4(),
		name: "Machine Learning",
		description: "Tags related to machine learning and AI",
		color: "#FF6B6B",
		createdAt: new Date("2024-01-01"),
		updatedAt: new Date("2024-01-01"),
	},
	{
		id: uuidv4(),
		name: "Data Science",
		description: "Tags related to data science and analytics",
		color: "#4ECDC4",
		createdAt: new Date("2024-01-01"),
		updatedAt: new Date("2024-01-01"),
	},
	{
		id: uuidv4(),
		name: "Computer Vision",
		description: "Tags related to computer vision and image processing",
		color: "#45B7D1",
		createdAt: new Date("2024-01-01"),
		updatedAt: new Date("2024-01-01"),
	},
	{
		id: uuidv4(),
		name: "Natural Language Processing",
		description: "Tags related to NLP and text processing",
		color: "#96CEB4",
		createdAt: new Date("2024-01-01"),
		updatedAt: new Date("2024-01-01"),
	},
	{
		id: uuidv4(),
		name: "Time Series",
		description: "Tags related to time series analysis",
		color: "#FFEEAD",
		createdAt: new Date("2024-01-01"),
		updatedAt: new Date("2024-01-01"),
	},
];

export const getMockTagById = (id: string): Tag | undefined => {
	return mockTags.find((tag) => tag.id === id);
};

export const getMockTagByName = (name: string): Tag | undefined => {
	return mockTags.find((tag) => tag.name.toLowerCase() === name.toLowerCase());
};
