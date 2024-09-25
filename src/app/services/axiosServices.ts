import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";


const baseUrl = import.meta.env.VITE_BASE_URL || "";

export const axiosAppInstance = applyCaseMiddleware(
    axios.create({
        baseURL: baseUrl,
        withCredentials: true,
    }),
);

axiosAppInstance.interceptors.request.use(async (config) => {
    // let newConfig = interceptorRequestAuth(config);
    //
    // return newConfig
    return config
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
