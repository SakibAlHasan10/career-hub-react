import { Outlet } from "react-router-dom";

const RootFile = () => {
    return (
        <div>
            <h2>Root</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default RootFile;