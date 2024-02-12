<<<<<<< HEAD
import React, { useEffect } from "react";
import Link from "next/link";

function SearchResult({ product }) {
    console.log("Product in SearchResult:", product);
    console.log("Product in SearchResult:", product.id);

    useEffect(() => {
        console.log("Product in SearchResult useEffect:", product);
        console.log("Product in SearchResult:", product.id);
    }, [product]);

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
=======
// import React from "react";
// import Link from "next/link";

// function SearchResult({ product }) {
//     console.log("Product in SearchResult:", product);
//     return (
//         <div>
//             {product && product._id ? (
//                 <div>
//                     {/* ici creer route pour afficher les produits rechercher dans la navbar */}
//                     <Link href={`/Pages/products/${product._id}`}>
//                         <div className="hover:bg-gray-100">{product.name}</div>
//                     </Link>
//                 </div>
//             ) : (
//                 <p>No results found</p>
//             )}
//         </div>
//     );
// }

// export default SearchResult;
>>>>>>> origin/frontend
