import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const AllCategories = ({}) => {
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
        console.log(selectedCategory);
    }, []);

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
        console.log(value);
    };

    return (
        <div>
            <select name="" id="" className="text-black h-10 bg-gray-100 w-[10rem]">
                <option value="">All Categories</option>
                {selectedCategory.map((category) => (
                    <option key={category.name} value={category.name}>
                        <Link
                            href="/productByCategory/[category]"
                            as={`/productByCategory/${encodeURIComponent(category.name)}`}
                        >
                            {category.name}
                        </Link>
                    </option>
                ))}
            </select>
        </div>
    );
};

export default AllCategories;
