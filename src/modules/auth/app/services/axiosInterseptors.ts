import {InternalAxiosRequestConfig} from "axios";
import {authToken} from "../store/profileSlice.ts";
import {store} from "../../../../app/store";

export const interceptorRequest = (config: InternalAxiosRequestConfig) => {

    const token = authToken(store)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}