import axios from "axios";

import { fetchDecorator } from "/src/shared/lib/fetchDecorator";

const { VITE_API_URL: baseURL } = import.meta.env;

const instance = axios.create({ baseURL });

export const sendOrderApi = fetchDecorator((payload) => instance.post("order/send", { ...payload }));


