import BannerImg from "./BannerImg";
import BannerTest from "./BannerTest";

const Banner = () => {
    return (
        <div className=" flex justify-between pl-8">
            <BannerTest></BannerTest>
            <BannerImg></BannerImg>
        </div>
    );
};

export default Banner;