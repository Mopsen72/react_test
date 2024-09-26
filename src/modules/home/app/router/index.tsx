import {redirect, RouteObject} from "react-router-dom";
import {authToken} from "../../../auth/app/store/profileSlice.ts";
import {store} from "../../../../app/store";
import {refreshService} from "../../../auth/app/services/refreshService.ts";
import HomeLayout from "../../pages/homeLayout/HomeLayout.tsx";

const token = authToken(store.getState())
export const routes: RouteObject[] = [{
    path: "/home",
    loader: async () => {
        if (!token) {
            return await refreshService() ? true : redirect("/auth");
        } else {
            return;
        }
    },
    element: <HomeLayout/>,
    children: [
        {
            index: true,
            lazy: async () => {
                const HomeIndexPage = await import("../../pages/homeIndexPage/HomeIndexPage.tsx");
                return {Component: HomeIndexPage.default}
            }
        }
    ]
}]