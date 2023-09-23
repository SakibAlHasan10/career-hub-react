import Job from "./Job";
import PropTypes from 'prop-types'
const Jobs = ({jobs}) => {
    return (
        <div className="text-center">
            <h2 className="text-5xl font-extrabold mt-20">Featured Jobs</h2>
            <p className="text-base font-medium my-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};
Jobs.propTypes ={
    jobs: PropTypes.array
}
export default Jobs;