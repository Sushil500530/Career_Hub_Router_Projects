
import image from '../../assets/image/user.png'
const Banner = () => {
    return (
        <div className='flex gap-5 items-center justify-between px-5 pt-6'>
            <div className="w-[40%] space-y-4">
                <h1 className="text-7xl font-bold">One Step <br />Closer To Your <br /> <span className="text-violet-500">Dream Job</span></h1>
                <p>
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl mt-5 capitalize text-white">Get Started</button>
            </div>
            <div className='w-[50%]'>
                <img src={image} alt="profile" />
            </div>

        </div>
    );
};

export default Banner;