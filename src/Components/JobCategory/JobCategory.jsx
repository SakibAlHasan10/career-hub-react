import { useEffect, useState } from "react";
import Category from "./Category";

const JobCategory = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    
    return (
        <div className="text-center">
            
            <h2 className="text-5xl font-extrabold mt-20">Job Category List</h2>
            <p className="text-base font-medium my-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-4 gap-4 ">
                {
                    categories.map(category => <Category 
                        key={category.id} 
                        category={category}></Category>)
                }   
            </div>
        </div>
    );
};

export default JobCategory;