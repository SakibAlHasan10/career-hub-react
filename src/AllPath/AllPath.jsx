import { createBrowserRouter } from "react-router-dom";
import RootFile from "../RootFile/RootFile";
import Home from "../Pages/Home/Home";
import JobDetails from "../Components/JobDetails/JobDetails";
import Statistics from "../Pages/Statistics/Statistics";

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
            element: <Statistics></Statistics>,
            loader: ()=> fetch('/public/jobs.json'),
            children:[
                {
                    path: '/Statistics/:id',
                    element: <JobDetails></JobDetails>
                }
            ]
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