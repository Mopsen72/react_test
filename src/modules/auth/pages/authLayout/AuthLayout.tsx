import {Outlet} from "react-router-dom";
import css from "./style.module.scss"
import {cyan} from "@ant-design/colors";
import * as React from "react";

const AuthLayout: React.FC = () => {
    console.log("layout")
    return (
        <>
            <div className={`${css.center}`} style={{backgroundColor: cyan[1]}}>
                <Outlet/>
            </div>
        </>
    )
}

export default AuthLayout