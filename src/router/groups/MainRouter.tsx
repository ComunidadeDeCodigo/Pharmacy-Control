import { MainLayout } from "../../components/layout/MainLayout";
import { Landing } from "../../pages/Landing";
import { About } from "../../pages/about";
import {List} from "../../pages/Auth/list";
import { NotFound } from "../../pages/notFound";
import { IRouteProps } from "../../utils/types/router";

export const MainRoutes: IRouteProps = {
    path:"/",
    element:MainLayout,
    visibility:"public",
    children:[
        {
            path:"/",
            element:Landing,
            visibility:"public",
        },
        {
            path:"/about",
            element:About,
            visibility:"public",
        },
        {
            path:"/list",
            element:List,
            visibility:"public",
        },
        {
            path:"*",
            element:NotFound,
            visibility:"public",
        },
    ],
};