import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Heade/Header";
import JobCategory from "../../Components/JobCategory/JobCategory";
import Jobs from "../../Components/Jobs/Jobs";
import { useState } from "react";

const Home = () => {
    const jobs = useLoaderData()
    const displayJobs = jobs.slice(0,2)
    const [display, setDisplay] = useState(displayJobs)
    console.log(displayJobs)
    return (
        <div className="mb-16">
            <Header></Header>
            <div className="max-w-screen-xl mx-auto px-8">
                <JobCategory ></JobCategory>
                <Jobs jobs={display}></Jobs>
            </div>
                {
                   display.length == '2' ? <div className="justify-center flex mt-4">
                   <button onClick={()=> setDisplay(jobs)} className="btn  bg-gradient-to-r from-cyan-500 to-blue-500 text-white">See All Jobs</button>
                </div> : ''
                }
            
        </div>
    );
};

export default Home;