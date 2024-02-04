import React from "react";
import Link from "next/link";

function SearchResult({ product }) {
    console.log("Product in SearchResult:", product);
    return (
        <div>
            {product ? (
                <div>
                    {/* ici creer route pour afficher les produits rechercher dans la navbar */}
                    <Link href={`/product/${product.id}`}>
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
