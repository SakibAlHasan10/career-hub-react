import { useLoaderData, useParams } from "react-router-dom";
import { setLocalStorage } from "../../Utility/LocalStore";
// import setLocalStorage '/LocalStore.js'
const JobDetails = () => {
    
    const jobDetails = useLoaderData()
     
    const {id} = useParams()
    const findJob = jobDetails.find(job => job.id === parseInt(id))
    console.log( findJob)
    const {salary,job_title,contact_information,job_description, job_responsibility,educational_requirements,experiences} = findJob;
    
    return (
        <div className="grid grid-cols-4 max-w-screen-xl mx-auto px-8 gap-5 my-20">
            <div className="col-span-3">
                <p className="text-base font-semibold mb-6 pr-5"> <span className="text-base font-extrabold">Job Description:</span> {job_description}</p>
                <p className="text-base font-semibold mb-6 pr-5"> <span className="text-base font-extrabold">Job Responsibility:</span> {job_responsibility}</p>
                <h4 className="text-base font-extrabold">Educational Requirements:</h4>
                <p className="text-base font-semibold mb-6 pr-5"> {educational_requirements}</p>
                <h4 className="text-base font-extrabold">Experiences:</h4>
                <p className="text-base font-semibold mb-6 pr-5"> {experiences}</p>
            </div>
            <div>
                <div className="p-5 bg-[#f9f9ff] mb-5 rounded-md">
                    <h3 className="text-base font-extrabold border-b border-gray-300 pb-3">Job Details</h3>
                    <p className="text-base pt-3 pb-2 font-semibold"> <span className="text-base font-extrabold">Salary :</span> {salary}</p>
                    <p className="text-base font-semibold pb-4"> <span className="text-base font-extrabold">Job Title :</span> {job_title}</p>
                    <h3 className="text-base font-extrabold border-b border-gray-300 pb-3">Contact Information</h3>
                    <p className="text-base pt-3 pb-2 font-semibold"> <span className="text-base font-extrabold">Phone :</span> {contact_information.phone}</p>
                    <p className="text-base font-semibold pb-2"> <span className="text-base font-extrabold">Email :</span> {contact_information.email}</p>
                    <p className="text-base font-semibold pb-2"> <span className="text-base font-extrabold">Address :</span> {contact_information.address}</p>
                </div>
                <button onClick={()=>setLocalStorage(id)}  className="btn  bg-gradient-to-r from-cyan-500 to-blue-500 w-full text-white">Apply Now</button>

            </div>
        </div>
    );
};

export default JobDetails;