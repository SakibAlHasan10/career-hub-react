
const Job = ({job}) => {
    console.log(job)
    const {id, company_name, logo, remote_or_onsite,salary,location,job_type,job_title    } = job
    return (
        <div className="my-5 text-left border border-slate-200 p-5">
            <img src={logo} alt="" />
            <h2>{job_title}</h2>
            <h2>{company_name}</h2>
            <div className="flex gap-5">
                <p>{remote_or_onsite}</p>
                <p>{job_type}</p>
            </div>
            <div className="flex gap-5">
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button className="text-xl font-extrabold">View Details</button>
        </div>
    );
};

export default Job;