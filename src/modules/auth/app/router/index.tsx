import {RouteObject} from "react-router-dom";
import AuthLayout from "../../pages/authLayout/AuthLayout.tsx";

export const routes: RouteObject[] =
    [{
        path: "/auth",
        element: <AuthLayout/>,
        children: [
            {
                index: true,
                // element: <AuthLoginPage/>
                lazy: async () => {
                    const AuthLoginPage = await import("../../pages/authLogin/AuthLoginPage.tsx");
                    return {Component: AuthLoginPage.default}
                },
            }
        ]
    }]
