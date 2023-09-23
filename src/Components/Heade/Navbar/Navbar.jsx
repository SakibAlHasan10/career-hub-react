import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-[#f9f9ff]">
            <nav className="lg:flex justify-between items-center py-6  max-w-screen-xl mx-auto px-8">
                <div className="">
                    <h1 className="text-4xl font-semibold">CareerHub</h1>
                </div>
                {/* <div className="flex justify-between w-2/3"> */}
                    <ul className="text-base font-bold lg:flex  gap-5">
                    <li>
                    <NavLink
                    to={`/statistics`}
                    className={({ isActive, isPending }) =>
                      isActive? "text-blue-600 underline"
                      :isPending? "pending"
                      : ""}>
                        Statistics
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                    to={`/applied_jobs`}
                    className={({ isActive, isPending }) =>
                      isActive? "text-blue-600 underline"
                      :isPending? "pending"
                      : ""}>
                        Applied Jobs
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                    to={`/blog`}
                    className={({ isActive, isPending }) =>
                      isActive? "text-blue-600 underline"
                      :isPending? "pending"
                      : ""}>
                        Blog
                    </NavLink>
                    </li>
                    </ul>
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Star Applying</button>
                {/* </div> */}
            </nav>
        </div>
    );
};

export default Navbar;