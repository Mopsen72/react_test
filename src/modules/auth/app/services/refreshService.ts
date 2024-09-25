import {axiosAppInstance} from "../../../../app/services/axiosServices.ts";
import {store} from "../../../../app/store";
import {logedIn} from "../store/profileSlice.ts";
import {TAuthResponse} from "../../shared/types";
import {AxiosResponse} from "axios";

export const refreshService = async () => {

    // const token = authToken(store.getState())
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const response: AxiosResponse<TAuthResponse> = await axiosAppInstance.post<TAuthResponse>("/api/auth/refresh", {}, {_isRetry: true});
    if (response.status === 200) {
        store.dispatch(logedIn(response.data));
        return true;
    } else {
        return false;
    }
}