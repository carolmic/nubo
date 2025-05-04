import api from "..";

export const getDataProductList = async () => {
	const response = await api.get("/data_product/data-product-list");
	return response.data;
};
