import { Outlet } from "react-router-dom";
// import Header from "../Components/Heade/Header";
import Navbar from "../Components/Heade/Navbar/Navbar";

const RootFile = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Header></Header> */}
        </div>
    );
};

export default RootFile;