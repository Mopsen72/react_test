import AuthLayout from "../../pages/authLayout/AuthLayout.tsx";
import AuthLoginPage from "../../pages/authLogin/AuthLoginPage.tsx";
import {RouteObject} from "react-router-dom";

export const router: RouteObject[] =
    [{
        path: "/auth",
        element: AuthLayout(),
        children: [
            {
                index: true,
                element: AuthLoginPage(),
            }
        ]
    },
    ]
