import axios from "axios";

import { fetchDecorator } from "/src/shared/lib/fetchDecorator";

const { VITE_API_URL: baseURL } = import.meta.env;

const instance = axios.create({ baseURL });

const defaultParams = { page: 1, perPage: 100 }

export const getAllProductsApi = fetchDecorator((params = defaultParams) => instance.get("products/all", { params: { ...params } }));

export const getPopularCategoriesApi = fetchDecorator((params = defaultParams) => instance.get("categories/all", { params: { ...params } }));
