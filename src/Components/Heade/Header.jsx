import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8  ">
            <Navbar></Navbar>
            <Banner></Banner>
            header
        </div>
    );
};

export default Header;