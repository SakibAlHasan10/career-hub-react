import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Heade/Header";
import JobCategory from "../../Components/JobCategory/JobCategory";
import Jobs from "../../Components/Jobs/Jobs";

const Home = () => {
    const jobs = useLoaderData()
    return (
        <div>
            <Header></Header>
            <div className="max-w-screen-xl mx-auto px-8">
                <JobCategory ></JobCategory>
                <Jobs jobs={jobs}></Jobs>
            </div>
            <div className="justify-center flex mt-4 mb-20">
                    <button className="btn  bg-gradient-to-r from-cyan-500 to-blue-500 text-white">See All Jobs</button>
            </div>
        </div>
    );
};

export default Home;