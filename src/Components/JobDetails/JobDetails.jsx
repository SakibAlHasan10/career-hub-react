import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const JobDetails = useLoaderData()
    console.log(JobDetails)
    return (
        <div>
            hello job details
        </div>
    );
};

export default JobDetails;