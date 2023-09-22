import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const FeaturedJob = ({ job }) => {
    const { company_name, logo, job_title, remote_or_onsite, location, salary, job_type, id } = job;

    // console.log(job);
    return (
        <div className="card card-compact border bg-base-100 shadow-xl py-10">
            <figure><img src={logo} alt="photo" /></figure>
            <div className="card-body text-start">
                <h2 className="card-title">{job_title}</h2>
                <p className="text-xl">{company_name}</p>
                <div className="my-3">
                    <button className="px-5 py-2 font-extrabold border rounded border-violet-500 mr-4 text-violet-500">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-violet-500 text-violet-600">{job_type}</button>
                </div>
                <div className="flex gap-5 text-base">
                    <p className="flex flex-grow-0"><CiLocationOn className="text-2xl font-bold" /> {location}</p>
                    <p className="flex"><CiDollar className="text-2xl font-bold" />{salary}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/jobs/${id}`}>
                        <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl capitalize text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

FeaturedJob.propTypes = {
    job: PropTypes.object.isRequired,
}
export default FeaturedJob;