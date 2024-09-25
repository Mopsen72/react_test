import {TProfile} from "../../../../shared/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../../../app/store";
import {TAuthResponse} from "../../shared/types";

const initialState: { user: TProfile | null, token: string | null } = {user: null, token: null};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        logedIn: (state, action: PayloadAction<TAuthResponse>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logedOut: (state) => {
            state.user = null;
            state.token = null;
        },
    }
})

export const {logedIn, logedOut} = profileSlice.actions

export const authToken = (state: RootState) => state.profile.token

export default profileSlice.reducer