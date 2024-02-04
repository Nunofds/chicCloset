import React from "react";
import { Search, X } from "react-feather";

const SearchDeleteConditionNavbar = ({ input, clearInput }) => {
    return (
        <div className="searchIcon">
            {input.length === 0 ? (
                <Search
                    className="bg-gray-100 p-2 w-10 h-10 rounded-l-none rounded-r-full"
                    // onClick={handleFilter}
                />
            ) : (
                <X
                    className="bg-gray-100 p-2 w-10 h-10 rounded-l-none rounded-r-full w-[25]"
                    onClick={clearInput}
                />
            )}
        </div>
    );
};

export default SearchDeleteConditionNavbar;
