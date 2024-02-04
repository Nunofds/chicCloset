"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, User, ShoppingCart, Heart, X } from "react-feather";
import SeacrchDeleteConditionNavbar from "./SeacrchDeleteConditionNavbar";
// import SearchProductList from "./SearchProductList";

const SearchBar = ({ setResults }) => {
    //code from video searchbar
    const [input, setInput] = useState("");

    // state utilisé pour la condition d'affichage du X
    const [wordEntered, setWordEntered] = useState("");

    const apiUrl = "http://localhost:5000/products/";

    useEffect(() => {
        axios
            .get(`${apiUrl}?q=${input}`)
            .then((response) => {
                const results = response.data.filter((product) => {
                    return input && product && product.name.toLowerCase().includes(input);
                });

                setResults(results);
                console.log("Results from SearchBar:", results);
            })
            .catch((error) => console.error(error));
    }, [input]);

    const handleChange = (value) => {
        setInput(value);
        console.log(value);
    };

    // Fonction pour effacer le champ de recherche
    const clearInput = () => {
        setInput("");
        setWordEntered("");
    };

    return (
        <div className="flex">
            <div className="items-center flex gap-1">
                <input
                    type="text"
                    name="search"
                    id="serch"
                    className="shadow-slate-500 w-[25rem] h-10 p-2 outline-none bg-gray-100 rounded-l-full rounded-r-none"
                    placeholder="Search for products"
                    onChange={(e) => handleChange(e.target.value)}
                    value={input}
                ></input>

                <select name="" id="" className="text-black h-10 bg-gray-100 w-[10rem]">
                    <option value="">All Categories</option>
                    <option value="">Shoes</option>
                    <option value="">Womenwear</option>
                    <option value="">Menswear</option>
                </select>
                {/* {filteredData.length === 0 && (
                    <div className="searchIcon">
                        {wordEntered !== "" ? (
                            <X
                                className="bg-gray-100 p-2 w-10 h-10 rounded-l-none rounded-r-full w-[25]"
                                onClick={clearInput}
                            />
                        ) : (
                            <Search
                                className="bg-gray-100 p-2 w-10 h-10 w-[25] rounded-l-none rounded-r-full"
                                onClick={handleFilter}
                            />
                        )}
                    </div>
                )} */}
                <SeacrchDeleteConditionNavbar input={input} />
            </div>
        </div>
    );
};

export default SearchBar;
