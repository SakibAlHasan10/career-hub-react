
const Category = ({category}) => {
    // console.log(category)
    const {id, logo, category_name, availability} = category
    return (
        <div className="w-20rem h-20rem bg-[#f9f9ff] my-5 p-10 text-left">
            <img src={logo} alt="" className="w-12 h-12 mb-10" />
            <h2 className="text-xl font-extrabold ">{category_name}</h2>
            <h3 className="text-base font-medium ">{availability}</h3>
        </div>
    );
};

export default Category;