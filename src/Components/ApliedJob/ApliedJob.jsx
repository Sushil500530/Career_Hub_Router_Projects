import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/Utility";
import AppliedJobShow from "../AppliedJobShow/AppliedJobShow";






const ApliedJob = () => {

    const jobs = useLoaderData();
    const [saveAppliedJobs, setSaveAppliedJobs] = useState([]);
    const [displayJobs,setDisplayJobs] = useState([]) ; 

    const handleJobFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(saveAppliedJobs) ;
        }
        else if(filter === 'remote'){
            const remoteJobs = saveAppliedJobs.filter((job) => job.remote_or_onsite == "Remote") ;
            setDisplayJobs(remoteJobs) ;
        }
        else if(filter === 'onsite'){
            const OnsiteJobs = saveAppliedJobs.filter((job) => job.remote_or_onsite === "Onsite") ;
            setDisplayJobs(OnsiteJobs) ;
        }
    }

    useEffect(() => {
        const storedJobIis = getStoredJobApplication();
        if (jobs.length) {
            const jobsApplied = jobs.filter((job) => storedJobIis.includes(job.id));
            console.log(jobs, storedJobIis, jobsApplied);

            // different away to solved 
            // const jobsApplied = [] ; 
            // for(const id of storedJobIis){
            //     const job = jobs.find(job => job.id === id) ;
            //     if(job){
            //         jobsApplied.push(job)
            //     }
            //     console.log(job);
            // }

            setSaveAppliedJobs(jobsApplied) ;
            setDisplayJobs(jobsApplied) ;
        }
    }, [jobs])


    return (
        <div>
            <h1 className="text-3xl">Job I Aplied! {saveAppliedJobs.length}</h1>
            <div className="flex flex-col justify-end items-end w-full px-7">
                <details className="dropdown mb-32">
                    <summary className="m-1 btn capitalize text-base">Filter by</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-24 relative right-2">
                        <li onClick={()=> handleJobFilter('all') }><a>All</a></li>
                        <li onClick={()=> handleJobFilter('remote') }><a>Remote</a></li>
                        <li onClick={()=> handleJobFilter('onsite') }><a>Onside</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid grid-cols-1">
                {
                    displayJobs.map(jobDetails => <AppliedJobShow
                        jobDetails={jobDetails}
                        key={jobDetails.id}
                    ></AppliedJobShow>)
                }
            </div>
        </div>
    );
};

export default ApliedJob;