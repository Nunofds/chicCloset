"use client";
import React, { useEffect } from "react";
import Link from "next/link";

function SearchResult({ product }) {
    console.log("Product in SearchResult:", product);
    console.log("Product in SearchResult:", product && product.id);

    useEffect(() => {
        console.log("Product in SearchResult useEffect:", product);
        console.log("Product in SearchResult:", product && product.id);
    }, [product]);

    return (
        <div>
            {product ? (
                <div>
                    {/* ici creer route pour afficher les produits rechercher dans la navbar */}
                    <Link href={`/products/detail/${product.id}`}>
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
