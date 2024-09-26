import {createBrowserRouter, redirect} from "react-router-dom";
import {routes as authRouters} from "../../modules/auth/app/router";
import {routes as homeRouters} from "../../modules/home/app/router"

export const router = createBrowserRouter([
    {
        path: "/",
        loader: () => {
            return redirect("/auth")
        },
    },
    ...authRouters,
    ...homeRouters

])