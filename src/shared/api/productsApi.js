import axios from "axios";

import { fetchDecorator } from "/src/shared/lib/fetchDecorator";

const { VITE_API_URL: baseURL } = import.meta.env;

const instance = axios.create({ baseURL });

const defaultParams = { page: 1, perPage: 100 }

export const getAllProductsApi = fetchDecorator(({ params = {} }) => instance.get("products/all", { params: { ...params, ...defaultParams } }));

export const getPopularProductsApi = fetchDecorator(() => instance.get("products/all", { params: { discont: true, page: 1, perPage: 4 } }));

export const getDiscontedProductsApi = fetchDecorator(({ params = {} }) => instance.get("products/all", { params: { discont: true, ...params, ...defaultParams } }));

export const getProductsByCategoryApi = fetchDecorator(({ categorySlug, params = {} }) => {
    return instance.get(`categories/${categorySlug}`, { params: { ...params, ...defaultParams } })
});

export const getProductByIdApi = fetchDecorator((productId) => instance.get("products/" + productId));
export const getProductBySlugApi = fetchDecorator(({ productSlug }) => instance.get(`products/${productSlug}`));

export const getProductsByIdsApi = fetchDecorator((productsIds) => instance.post(`products/cart/ids`, productsIds));