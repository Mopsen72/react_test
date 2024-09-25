import {TProfile} from "../../../../shared/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../../../app/store";

const initialState: { profile: TProfile | null, token: string | null } = {profile: null, token: null};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        logedIn: (state, action: PayloadAction<{ profile: TProfile, token: string }>) => {
            state.profile = action.payload.profile
            state.token = action.payload.token
        },
        logedOut: (state) => {
            state.profile = null
            state.token = null
        },
    }
})

export const {logedIn, LogedOut} = profileSlice.actions

export const authToken = (state: RootState) => state.profile.token

export default profileSlice.reducer