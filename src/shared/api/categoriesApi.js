import axios from "axios";

import { URL } from "./config.js"
import { fetchDecorator } from "/src/shared/lib/fetchDecorator";

const instance = axios.create({ baseURL: URL + "categories" });

export const getAllCategoriesApi = fetchDecorator(() => instance.get("/all"));

export const getProductsByCategoryIdApi = fetchDecorator((id) => instance.get(`/${id}`));
