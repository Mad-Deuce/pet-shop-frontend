import axios from "axios";

import { URL } from "./config.js"
import { fetchDecorator } from "/src/shared/lib/fetchDecorator";

const instance = axios.create({ baseURL: URL + "/sale" });

export const saleSendApi = fetchDecorator((payload) => instance.post("/send", { payload }));
