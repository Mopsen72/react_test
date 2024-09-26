import {Outlet} from "react-router-dom";
import css from "./style.module.scss"
import * as React from "react";
import {useAppDispatch} from "../../../../app/hooks";
import {logedOut} from "../../app/store/profileSlice.ts";

const AuthLayout: React.FC = () => {

    const dispatch = useAppDispatch();
    dispatch(logedOut())

    return (
        <>
            <div className={`${css.center}`}>
                <Outlet/>
            </div>
        </>
    )
}

export default AuthLayout