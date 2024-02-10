import axios from "axios";
import React, { useEffect, useState } from "react";

const AllCategories = () => {
    const [categories, setCategories] = useState([]);

    const apiUrl = "http://localhost:5000/categories";

    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => {
                setCategories(response.data);
                console.log("Results from Category:", response.data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <select name="" id="" className="text-black h-10 bg-gray-100 w-[10rem]">
                <option value="">All merde</option>
                {categories.map((category) => (
                    <option key={category._id} value={category.name}>
                        {" "}
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default AllCategories;
