import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn, CiDollar } from "react-icons/ci";
import { FiPhone, } from "react-icons/fi";
import { AiTwotoneMedicineBox, } from "react-icons/ai";
import { MdEmail, } from "react-icons/md";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/Utility";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const IdInt = parseInt(id);
    const job = jobs.find(job => job.id === IdInt);
    const { job_description, job_responsibility, experiences, educational_requirements, salary, job_title, contact_information } = job;
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(IdInt)
        toast('Applied Successfully!')
    }

    return (
        <div>
            <h2 className="text-5xl font-semibold text-center my-12">Job Details</h2>
            <div className="grid md:grid-cols-4">
                <div className=" md:col-span-3 space-y-5">
                    <h2 className="font-bold">Job Discription:<small className="font-normal text-[14px]"> {job_description}</small></h2>
                    <h2 className="font-bold">Job Responsibility:<small className="font-normal text-[14px]"> {job_responsibility}</small></h2>
                    <h2 className="font-bold">Educational Requirements:<p className="font-normal text-[14px] my-3"> {educational_requirements}</p></h2>
                    <h2 className="font-bold">Experience:<p className="font-normal text-[14px] my-3"> {experiences}</p></h2>
                </div>
                <div className="my-3">
                    <div className="bg-violet-200 rounded-sm p-5">
                        <h1 className="font-bold text-xl my-3">Job Details</h1>
                        <hr />
                        <h2 className="font-bold flex gap-1  items-center"><CiDollar className="text-xl text-violet-500" />Salary: <span className="font-normal">{salary}</span></h2>
                        <h2 className="font-bold flex gap-1 items-center"><AiTwotoneMedicineBox className="text-xl text-violet-500" />Location: <span className="font-normal">{job_title}</span></h2>
                        <h1 className="font-bold text-xl my-3">Contact Information</h1>
                        <hr />
                        <h2 className="font-bold flex gap-1 items-center"><FiPhone className="text-xl text-violet-500" />Phone: <span className="font-semibold">{contact_information.phone}</span></h2>
                        <h2 className="font-bold flex gap-1 items-center"><MdEmail className="text-xl text-violet-500" />Email: <span className="font-semibold">{contact_information.email}</span></h2>
                        <h2 className="font-bold flex gap-1 items-center"><CiLocationOn className="text-5xl text-violet-500" />Address: <span className="font-semibold">{contact_information.address}</span></h2>
                    </div>
                      <button onClick={handleApplyJob} className="btn w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl mt-5 capitalize text-white">Apply Now</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;