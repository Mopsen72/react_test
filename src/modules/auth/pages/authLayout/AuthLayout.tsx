import {Outlet} from "react-router-dom";
import css from "./style.module.scss"
import {cyan} from "@ant-design/colors";
import * as React from "react";
import {useAppDispatch} from "../../../../app/hooks";
import {logedOut} from "../../app/store/profileSlice.ts";

const AuthLayout: React.FC = () => {

    const dispatch = useAppDispatch();
    dispatch(logedOut())

    return (
        <>
            <div className={`${css.center}`} style={{backgroundColor: cyan[1]}}>
                <Outlet/>
            </div>
        </>
    )
}

export default AuthLayout