"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, User, ShoppingCart, Heart, X } from "react-feather";
import SearchDeleteConditionNavbar from "./SearchDeleteConditionNavbar";
import AllCategories from "./Categories/AllCategories";
// import SearchProductList from "./SearchProductList";

const SearchBar = ({ setResults }) => {
    //code from video searchbar
    const [input, setInput] = useState("");
    const [categories, setCategories] = useState("");

    const apiUrl = "http://localhost:5000/products/";

    useEffect(() => {
        axios
            .get(`${apiUrl}?q=${input}`)
            .then((response) => {
                const results = response.data.filter((product) => {
                    return input && product && product.name.toLowerCase().includes(input);
                });

                // Mise à jour de l'état global des resultats "setResults" pour les utiliser dans le composant parent "navbar" (voir NavBar.jsx)
                setResults(results);
                console.log("Results from SearchBar:", results);
            })
            .catch((error) => console.error(error));
    }, [input]);

    const handleChange = (value) => {
        setInput(value);
        console.log(value);
    };

    // // Fonction pour effacer le champ de recherche
    // const clearInput = () => {
    //     setInput("");

    //     setWordEntered("");
    // };

    return (
        <div className="flex">
            <div className="items-center flex gap-1">
                <input
                    type="search"
                    name="search"
                    id="serch"
                    className="shadow-slate-500 w-[25rem] h-10 p-2 outline-none bg-gray-100 rounded-l-full rounded-r-none"
                    placeholder="Search for products"
                    onChange={(e) => handleChange(e.target.value)}
                    value={input}
                ></input>

                <AllCategories />
                <SearchDeleteConditionNavbar input={input} />
            </div>
        </div>
    );
};

export default SearchBar;
