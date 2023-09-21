import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {

    const [jobs,setJobs] = useState([]) ;
    /**
     * this is not the best way to load show all data
     */
    const [dataLength,setDataLength] = useState([4]) ;
    useEffect(()=>{
        fetch('jobs.json') 
        .then(res => res.json()) 
        .then(data =>setJobs(data))
    },[]) ;
    console.log(jobs);
  return (
    <div>
      <div className="text-center space-y-3">
        <h2 className="text-5xl font-semibold">Featured Jobs: {jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you need. Its your future
        </p>
        <div className="grid grid-cols-2 gap-6">
            {
                jobs.slice(0, dataLength).map(job => <FeaturedJob
                job={job}
                key={job.id}
                ></FeaturedJob>)
            }
        </div>
        <div className={dataLength === jobs.length && 'hidden'}>
          <button onClick={()=> setDataLength(jobs.length)} className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl mt-5 capitalize text-white">Show All</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
