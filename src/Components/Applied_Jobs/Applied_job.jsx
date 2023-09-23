const Applied_job = ({job}) => {
    console.log(job)
    const {logo,job_title,company_name, remote_or_onsite,location,salary,job_type} = job
    return (
        <div className="flex">
            <img src={logo} alt="" className="w-32 h-10" />
            <div>
                <h2>{job_title}</h2>
                <h3>{company_name}</h3>
                <div className="flex gap-3">
                    <p>{remote_or_onsite}</p>
                    <p>{job_type}</p>
                </div>
                <div className="flex gap-3">
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
            </div>
        </div>
    );
};

export default Applied_job;