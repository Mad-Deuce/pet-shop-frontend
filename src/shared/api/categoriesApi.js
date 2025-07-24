import axios from "axios";

import { URL } from "./config.js"
import { fetchDecorator } from "/src/shared/lib/fetchDecorator";

const instance = axios.create({ baseURL: URL });

const defaultParams = { page: 1, perPage: 100 }

export const getAllCategoriesApi = fetchDecorator((params = defaultParams) => instance.get("categories/all", { params: { ...params } }));

export const getPopularCategoriesApi = fetchDecorator((params = defaultParams) => instance.get("categories/all", { params: { page: 1, perPage: 4 } }));

export const getProductsByCategoryIdApi = fetchDecorator((id) => instance.get(`categories/${id}`));
