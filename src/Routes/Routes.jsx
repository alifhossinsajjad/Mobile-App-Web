import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppsDetails from '../Pages/AppsDetails'


const router = createBrowserRouter([
    {
        path:'/',
        Component: RootLayout,
        errorElement : <ErrorPage/>,
        hydrateFallbackElement :<p>Loading Apps</p>,
        children : [
            {
                index: true,
                Component: Home,
            },
            {
                path:'/apps',
                Component: Apps,
            },
            {
                path:'/installation',
                Component: Installation,
            },

            {
                path:'/apps/:id',
                Component: AppsDetails,
            },
            {
                path:'*',
                Component: <ErrorPage/>
            }
        ]
    }
])

export default router;