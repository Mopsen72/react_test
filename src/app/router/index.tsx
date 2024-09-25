import {createBrowserRouter, redirect} from "react-router-dom";
import {routes as authRouters} from "../../modules/auth/app/router";

export const router = createBrowserRouter([
    {
        path: "/",
        loader: () => {
            return redirect("/auth")
        },
    },
    ...authRouters

])