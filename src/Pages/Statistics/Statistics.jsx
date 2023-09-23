import { Outlet } from "react-router-dom";

const Statistics = () => {
    return (
        <div>
            <div className="text-center pb-20 pt-12 bg-[#f9f9ff]">
                 <h2 className="text-3xl font-extrabold ">Job Details</h2>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Statistics;