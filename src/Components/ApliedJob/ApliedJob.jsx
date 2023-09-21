import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/Utility";
import AppliedJobShow from "../AppliedJobShow/AppliedJobShow";






const ApliedJob = () => {

    const jobs = useLoaderData();
    const [saveAppliedJobs, setSaveAppliedJobs] = useState([]);


    useEffect(() => {
        const storedJobIis = getStoredJobApplication();
        if (jobs.length) {
            const JobsApplied = jobs.filter(job => storedJobIis.includes(job.id));
            console.log(jobs, storedJobIis, JobsApplied);

            // different away to solved 
            // const jobsApplied = [] ; 
            // for(const id of storedJobIis){
            //     const job = jobs.find(job => job.id === id) ;
            //     if(job){
            //         jobsApplied.push(job)
            //     }
            //     console.log(job);
            // }

            setSaveAppliedJobs(JobsApplied)
        }
    }, [])


    return (
        <div>
            <h1 className="text-3xl">Job I Aplied! {saveAppliedJobs.length}</h1>
            <div className="flex flex-col justify-end items-end w-full px-7">
                <details className="dropdown mb-32">
                    <summary className="m-1 btn">Sort by</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-24 relative right-2">
                        <li><a>All</a></li>
                        <li><a>Remote</a></li>
                        <li><a>Onside</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid grid-cols-1">
                {
                    saveAppliedJobs.map(jobDetails => <AppliedJobShow
                        jobDetails={jobDetails}
                        key={jobDetails.id}
                    ></AppliedJobShow>)
                }
            </div>
        </div>
    );
};

export default ApliedJob;