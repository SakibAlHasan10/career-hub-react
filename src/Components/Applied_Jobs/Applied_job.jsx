const Applied_job = ({ job }) => {
  console.log(job);
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    salary,
    job_type,
  } = job;
  return (
    <div className="flex justify-between border border-blue-200 p-4 mb-4">
      <div className="flex gap-5 ">
        <div className="flex items-center rounded-md bg-[#f9f9ff] p-4">
            <img src={logo} alt="" className="w-32  " />
        </div>
        <div className="p-3">
          <h2 className="text-2xl font-extrabold">{job_title}</h2>
          <h3 className="text-2xl font-semibold my-1">{company_name}</h3>
          <div className="flex gap-3">
            <p className="border-2 border-blue-500 px-5 py-1 text-blue-500 rounded-md">
              {remote_or_onsite}
            </p>
            <p className="border-2 border-blue-500 px-5 py-1 text-blue-500 rounded-md">
              {job_type}
            </p>
          </div>
          <div className="flex mt-3 gap-3 text-xl font-semibold">
            <p className="">{location}</p>
            <p className="">{salary}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button className="btn border-none text-white bg-gradient-to-r from-cyan-500 to-blue-500">
        Get Started
      </button>
      </div>
    </div>
  );
};

export default Applied_job;
