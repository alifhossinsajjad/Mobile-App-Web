import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";



const router = createBrowserRouter([
    {
        path:'/',
        Component: RootLayout,
        errorElement : ErrorPage,
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
            }
        ]
    }
])

export default router;