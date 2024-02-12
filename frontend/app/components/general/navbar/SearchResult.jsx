"use client";
import React from "react";
import Link from "next/link";

function SearchResult({ product }) {
    return (
        <div>
            {product ? (
                <div>
                    <Link href={`/products/detail/${product._id}`}>
                        <div className="hover:bg-gray-100">{product.name}</div>
                    </Link>
                </div>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
}

export default SearchResult;
