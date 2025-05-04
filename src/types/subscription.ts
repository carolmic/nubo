// __tablename__ = 'subscription'

import { Account } from "./account";
import { DataProduct } from "./dataproduct";

export type Subscription = {
	id: string;
	account_id: string;
	data_product_id: string;
	start_date: Date;
	end_date: Date;
	is_active: boolean;
	created_at: Date;
	updated_at: Date;
	account: Account;
	data_product: DataProduct;
};
