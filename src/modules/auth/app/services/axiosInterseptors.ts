import {AxiosError, AxiosInstance, InternalAxiosRequestConfig} from "axios";
import {authToken} from "../store/profileSlice.ts";
import {store} from "../../../../app/store";
import {redirect} from "react-router-dom";
import {refreshService} from "./refreshService.ts";

export const interceptorRequest = (config: InternalAxiosRequestConfig) => {

    const token = authToken(store.getState())
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}

export const interceptorResponseReject = async (error: AxiosError, instance: AxiosInstance) => {
    console.error(`Ошибка axios при ${error.config && error.config.method ? error.config.method : ""} на ${error.config && error.config.url ? error.config.url : ""} со статусом ${error.response && error.response.status ? error.response.status : 'undefined'}`)
    // const errors = error.response?.data.errors;
    const config = error.config!;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    if (error.config?._isIgnore) {
        throw error;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
    } else if (error.response?.status === 401 && !error.config?._isRetry) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        config._isRetry = true;
        try {
            await refreshService();
            await instance(config);
            return;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_) {
            redirect("/auth")
            console.error("Кончилась сессия")
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
    } else if (error.response?.status === 401 && error.config._isRetry) {
        redirect("/auth")
        // } else if (error.response?.status === 403) {
        //выход из системы
        // await router.push({name: "auth-login"})
        //TODO сделать переход на страницу "нет доступа"

    } else if (error.request?.responseType === "blob") {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        const textError = JSON.parse(await error.response?.data.text());
        console.error(textError)
        // } else if (errors && Array.isArray(errors)) {
        //     errors.forEach((el) => {
        //         msg(el, "red-5");
        //     });
    } else {
        // msg("Произошла ошибка", "red-5");
    }
    return Promise.reject(error);
}