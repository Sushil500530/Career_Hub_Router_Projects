import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {

    const [jobs,setJobs] = useState([]) ;
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
                jobs.map(job => <FeaturedJob
                job={job}
                key={job.id}
                ></FeaturedJob>)
            }
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
