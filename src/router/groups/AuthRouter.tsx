import { IRouteProps } from "../../utils/types/router";
import { AuthLayout } from "../../components/layout/AuthLayout";
import { Login } from "../../pages/Auth/login";
import { SignUp } from "../../pages/Auth/signup";
import { Politic } from "../../pages/Auth/politic";
import { Profile } from "../../pages/Auth/profile";
import { List } from "../../pages/Auth/list";


export const AuthRoutes : IRouteProps = {
    path:"/auth",
    element:AuthLayout,
    visibility:"auth",
    children:[
        {
            path:"/auth/login",
            element:Login,
            visibility:"auth",
        },
        {
            path:"/auth/signup",
            element:SignUp,
            visibility:"auth",
        },
        {
            path:"/auth/politic",
            element:Politic,
            visibility:"auth",
        },
        {
            path:"/auth/profile",
            element:Profile,
            visibility:"auth",
        },
        {
            path:"/auth/list",
            element:List,
            visibility:"auth",
        },
    ]
}