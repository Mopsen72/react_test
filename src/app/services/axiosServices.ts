import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";
import {interceptorRequest as interceptorRequestAuth} from "../../modules/auth/app/services/axiosInterseptors.ts"

const baseUrl = import.meta.env.VITE_BASE_URL || "";

export const axiosAppInstance = applyCaseMiddleware(
    axios.create({
        baseURL: baseUrl,
        withCredentials: true,
    }),
);

axiosAppInstance.interceptors.request.use(async (config) => {
    return interceptorRequestAuth(config)
});

axiosAppInstance.interceptors.response.use(
    async (response) => response,
    async (error) => {
        // let newError = await interceptorResponseRejectAuth(error, axiosAppInstance);
        //
        // return newError
        return error
    }
);
