import { useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../../Utility/LocalStore";
import Applied_job from "./Applied_job";

const Applied_Jobs = () => {
    const localData = getLocalStorage()
    const jobData = useLoaderData()
    const allData = jobData.filter(job => localData.includes(job.id+''))
    // console.log(allData, localData)
    return (
        <div>
            {
                allData.map((job, i) => <Applied_job key={i} job={job}></Applied_job>)
            }
        </div>
    );
};

export default Applied_Jobs;