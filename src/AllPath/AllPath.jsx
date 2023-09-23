import { createBrowserRouter } from "react-router-dom";
import RootFile from "../RootFile/RootFile";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
{
    path: '/',
    element:<RootFile></RootFile>,
    children:[
        {
            path:'/',
            element: <Home></Home>
        }
    ]
}
])

export default router;