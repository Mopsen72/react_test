import {axiosAppInstance} from "../../../../app/services/axiosServices.ts";
import {TAuthCredentials} from "./types";
import {AxiosResponse} from "axios";
import {TAuthResponse} from "../../shared/types";

export const auth = async (credentials: TAuthCredentials): Promise<AxiosResponse<TAuthResponse>> => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    return await axiosAppInstance.post<TAuthResponse>("/api/auth/login", credentials, {_isRetry: true});


}