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
            element: <Home></Home>,
            loader: ()=> fetch('jobs.json')
        },
        {
            path: '/Statistics',
            element: <div>Statistics</div>
        },
        {
            path: '/applied_jobs',
            element: <div>Applied Jobs</div>
        },
        {
            path: '/blog',
            element: <div>Blog</div>
        }
    ]
}
])

export default router;