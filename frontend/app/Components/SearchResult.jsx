// import React from "react";

// function SearchResult({ results }) {
//     return (
//         <div>
//             <div>
//                 <h2>Search Results</h2>
//                 {results && results.length > 0 ? (
//                     <div>
//                         {results.slice(0, 3).map((product, id) => (
//                             <div key={product._id}>
//                                 <a>{product.name}</a>
//                                 <p>{product.description}</p>
//                                 <p>
//                                     / Prix: {product.price.value} {product.price.currency}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p>No results found</p>
//                 )}
//             </div>
//             ;
//         </div>
//     );
// }

// export default SearchResult;
import React from "react";
import Link from "next/link";

function SearchResult({ product }) {
    console.log("Product in SearchResult:", product);
    return (
        <div>
            {product ? (
                <div>
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
