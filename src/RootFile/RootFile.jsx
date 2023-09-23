import { Outlet } from "react-router-dom";
import Navbar from "../Components/Heade/Navbar/Navbar";
import Fotter from "../Components/Fotter/Fotter";

const RootFile = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default RootFile;