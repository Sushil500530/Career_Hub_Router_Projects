
const FeaturedJob = ({ job }) => {
    const { company_name, logo, job_title, remote_or_onsite, location, salary, job_type } = job;

    return (
        <div className="card card-compact border bg-base-100 shadow-xl py-10">
            <figure><img src={logo} alt="photo" /></figure>
            <div className="card-body text-start">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-violet-500 mr-4 text-violet-500">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-violet-500 text-violet-600">{job_type}</button>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary text-xl capitalize text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;