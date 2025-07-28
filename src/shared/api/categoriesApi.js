import axios from "axios";

import { fetchDecorator } from "/src/shared/lib/fetchDecorator";

const { VITE_API_URL: baseURL } = import.meta.env;

const instance = axios.create({ baseURL });

export const getAllCategoriesApi = fetchDecorator(() => instance.get("categories"));

export const getPopularCategoriesApi = fetchDecorator(() => instance.get("categories/popular"));

export const getCategoryByIdApi = fetchDecorator((categoryId) => instance.get("categories/" + categoryId));
