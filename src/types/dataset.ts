import { DataProduct } from "./dataproduct";

export type Dataset = {
	id: string;
	data_provider_id: string;
	category: string;
	is_active: boolean;
	created_at: Date;
	updated_at: Date;
	data_product: DataProduct[];
};
