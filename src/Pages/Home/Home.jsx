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
        </div>
    );
};

export default Home;