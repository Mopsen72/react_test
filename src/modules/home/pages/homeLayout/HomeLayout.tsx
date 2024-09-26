import * as React from "react";
import HeaderBar from "../../../../widgets/headerBar/HeaderBar.tsx";
import {Outlet} from "react-router-dom";

const HomeLayout: React.FC = () => (
    <>
        <div>
            <HeaderBar/>
            <Outlet/>
        </div>
    </>
)
export default HomeLayout