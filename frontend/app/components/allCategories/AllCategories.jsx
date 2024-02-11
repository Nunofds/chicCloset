import axios from "axios";
import React, { useEffect, useState } from "react";

const AllCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState([]);

    const apiUrl = "http://localhost:5000/categories";

    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => {
                setSelectedCategory(response.data);
                console.log("Results from Category:", response.data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <select name="" id="" className="text-black h-10 bg-gray-100 w-[10rem]">
                <option value="">All Categories</option>
                {selectedCategory.map((category) => (
                    <option key={category.name} value={category.name}>
                        {" "}
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default AllCategories;
