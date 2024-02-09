import React from "react";
import SearchResult from "./SearchResult";

const ProductList = ({ results, selectedCategory }) => {
    // code pour le filtrage des categories par rapport aux produits tapés dans la barre de recherche
    // const filteredresults = selectedCategory
    //     ? results.filter((product) => product.category === selectedCategory)
    //     : results;

    console.log("Results in ProductList:", results);
    return (
        <div className="h-[40] w-[100] ">
            {results.map((result) => {
                return <SearchResult product={result} key={result._id} />;
            })}
        </div>
    );
};

export default ProductList;
