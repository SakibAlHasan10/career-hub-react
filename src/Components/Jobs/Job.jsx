import { IoLocationOutline } from "react-icons/io5"
import { AiOutlineDollarCircle } from "react-icons/ai"
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
const Job = ({job}) => {
    // console.log(job)
    const {id, company_name, logo, remote_or_onsite,salary,location,job_type,job_title} = job
    const navigate = useNavigate()
    const handleJobDetails = ({id}) => {
        // console.log(id)
        navigate(`/Statistics/${id}`)
    }
    return (
        <div className="my-5 text-left border border-slate-200 p-8">
            <img src={logo} alt="" className="w-40 h-10 mb-6" />
            <h2 className="text-2xl font-extrabold">{job_title}</h2>
            <h2 className="text-xl font-semibold my-4">{company_name}</h2>
            <div className="flex gap-5">
                <p className="border-2 border-blue-500 px-6 py-2 rounded-md text-blue-500 text-base font-extrabold">{remote_or_onsite}</p>
                <p className="border-2 border-blue-500 px-6 py-2 rounded-md text-blue-500 text-base font-extrabold">{job_type}</p>
            </div>
            <div className="flex gap-5 text-xl font-semibold my-5">
                <p className="flex items-center gap-2"> <IoLocationOutline/> {location}</p>
                <p className="flex items-center gap-2"><AiOutlineDollarCircle/> {salary}</p>
            </div>
            <button onClick={()=>handleJobDetails({id}) } className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">View Details</button>
        </div>
    );
};
Job.propTypes ={
    job: PropTypes.object
}
export default Job;