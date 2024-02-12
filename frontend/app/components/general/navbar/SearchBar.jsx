"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, User, ShoppingCart, Heart, X } from "react-feather";
import AllCategories from "./../../Categories/AllCategories";
import SearchDeleteConditionNavbar from "./SearchDeleteConditionNavbar";

const SearchBar = ({ setResults }) => {
    //code from video searchbar
    const [input, setInput] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("");

    const apiUrl = "http://localhost:5000/products/";

    useEffect(() => {
        axios
            .get(`${apiUrl}?q=${input}`)
            .then((response) => {
                const results = response.data.filter((product) => {
                    return (
                        input &&
                        product &&
                        product.name.toLowerCase().includes(input)
                    );
                });

                setResults(results);
                console.log("Results from SearchBar:", results);
            })
            .catch((error) => console.error(error));
    }, [input, setSelectedCategory]);

    const handleChange = (value) => {
        setInput(value);
        console.log(value);
    };

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
        console.log(value);
    };

    return (
        <div className="flex">
            <div className="items-center flex gap-1">
                <input
                    type="search"
                    name="search"
                    id="search"
                    className="shadow-slate-500 w-[25rem] h-10 p-2 outline-none bg-gray-100 rounded-l-full rounded-r-none"
                    placeholder="Search for products"
                    onChange={(e) => handleChange(e.target.value)}
                    value={input}
                    autoComplete="off"
                ></input>

                <select
                    name=""
                    id=""
                    className="text-black h-10 bg-gray-100 w-[10rem]"
                >
                    <option value="">All Categories</option>
                    <option value="">Shoes</option>
                    <option value="">Womenwear</option>
                    <option value="">Menswear</option>
                </select>

                <SearchDeleteConditionNavbar input={input} />
                {/* <AllCategories setSelectedCategory={setSelectedCategory} />
                 */}
                <AllCategories onCategorySelect={handleCategoryChange} />
            </div>
        </div>
    );
};

export default SearchBar;
