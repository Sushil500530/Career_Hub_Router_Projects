import { Link } from "react-router-dom";

const Error = () => {
  
    return (
        <div className="text-center mt-20">
            <h2 className="text-4xl">Ooopps <span className="text-red-500 bold">!!!</span></h2>
            <p className="text-2xl font-semibold">Page Not Found!</p>
            <Link to="/"><button className="bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-2 text-xl font-medium rounded-md my-4">Go Home</button></Link>
        </div>
    );
};

export default Error;