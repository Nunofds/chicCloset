import React from "react";
import { Search, X } from "react-feather";

function SeacrchDeleteConditionNavbar({ input, clearInput }) {
    return (
        <div>
            {input.length === 0 ? (
                <div className="searchIcon">
                    <Search
                        className="bg-gray-100 p-2 w-10 h-10 w-[25] rounded-l-none rounded-r-full"
                        // onClick={handleFilter}
                    />
                </div>
            ) : (
                <div className="searchIcon">
                    <X
                        className="bg-gray-100 p-2 w-10 h-10 rounded-l-none rounded-r-full w-[25]"
                        onClick={clearInput}
                    />
                </div>
            )}
        </div>
    );
}

export default SeacrchDeleteConditionNavbar;
