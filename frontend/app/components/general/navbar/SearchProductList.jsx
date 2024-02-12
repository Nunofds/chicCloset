import React from "react";
import SearchResult from "./SearchResult";

const ProductList = ({ results }) => {
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
