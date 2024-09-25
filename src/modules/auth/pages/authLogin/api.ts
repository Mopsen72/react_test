import {axiosAppInstance} from "../../../../app/services/axiosServices.ts";
import {TAuthCredentials} from "./types";

export const auth = async (credentials: TAuthCredentials) => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const response = await axiosAppInstance.post("/api/auth/login", credentials, {_isRetry: true});
    if (response.status === 200) {
        return response.data
    }

}