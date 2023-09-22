
import { CiLocationOn, CiDollar, } from "react-icons/ci";
import PropTypes from 'prop-types' ;

const AppliedJobShow = ({jobDetails}) => {
    const{logo,company_name,job_type,job_title, location, salary,remote_or_onsite} = jobDetails ;

    return (
        <div className="flex justify-between items-center border my-5 p-5">
            <div className="flex gap-5">
                <div className="bg-gray-200 flex w-72 justify-center items-center p-5">
                    <img src={logo} alt="photo" />
                </div>
                <div>
                    <h2 className="card-title">{job_title}</h2>
                    <p className="text-xl">{company_name}</p>
                    <div className="my-3">
                        <button className="px-5 py-2 font-extrabold border rounded border-violet-500 mr-4 text-violet-500">{job_type}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-violet-500 text-violet-600">{remote_or_onsite}</button>
                    </div>
                    <div className="flex gap-5 text-base">
                        <p className="flex flex-grow-0"><CiLocationOn className="text-2xl font-bold" /> {location}</p>
                        <p className="flex"><CiDollar className="text-2xl font-bold" />{salary}</p>
                    </div>
                </div>
            </div>
           <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl mt-5 capitalize text-white">View Details</button>
        </div>
    );
};

AppliedJobShow.propTypes = {
    jobDetails: PropTypes.object.isRequired,
}

export default AppliedJobShow;