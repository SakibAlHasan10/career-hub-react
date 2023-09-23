import { Outlet } from "react-router-dom";
import Header from "../Components/Heade/Header";

const RootFile = () => {
    return (
        <div>
            <Header></Header>
            <h2>Root</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default RootFile;