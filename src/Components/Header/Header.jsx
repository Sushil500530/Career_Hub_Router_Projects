import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className=" shadow-md">
            <div className="navbar bg-violet-50">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu text-[18px] menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/statistics">Statistics</NavLink></li>
                    <li><NavLink to="/jobs">Jobs</NavLink></li>
                    <li><NavLink to="/applied">Applied Jobs</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-4xl">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-medium gap-2 text-[18px] px-1">               
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/statistics">Statistics</NavLink></li>
                    <li><NavLink to="/jobs">Jobs</NavLink></li>
                    <li><NavLink to="/applied">Applied Jobs</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn capitalize text-xl bg-[#9873FF] text-white">Star Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Header;