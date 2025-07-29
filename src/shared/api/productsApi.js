import axios from "axios";

import { fetchDecorator } from "/src/shared/lib/fetchDecorator";

const { VITE_API_URL: baseURL } = import.meta.env;

const instance = axios.create({ baseURL });

const defaultParams = { page: 1, perPage: 100 }

export const getAllProductsApi = fetchDecorator((params = defaultParams) => instance.get("products/all", { params: { ...params } }));

export const getPopularProductsApi = fetchDecorator(() => instance.get("products/all", { params: { discont: true, page: 1, perPage: 4 } }));

export const getDiscontedProductsApi = fetchDecorator((params = defaultParams) => instance.get("products/all", { params: { discont: true, ...params } }));

export const getProductsByCategoryApi = fetchDecorator((categoryId, params = defaultParams) => instance.get("categories/" + categoryId, { params: { ...params } }));

export const getProductByIdApi = fetchDecorator((productId) => instance.get("products/" + productId));
