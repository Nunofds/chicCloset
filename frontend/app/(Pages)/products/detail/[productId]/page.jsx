"use client";
import React, { useEffect } from "react";
import axios from "axios";

const ProductDetails = (productId) => {
    const productd = params.productId;

    // useEffect(() => {
    //     const fetchProductDetails = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:5000/products/${productId}`);

    //             console.log(first)

    //         }}
    // })

    return (
        <div>
            {/* <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>
                Price: {product.price.value} {product.price.currency[0]}
            </p> */}
        </div>
    );
};

export default ProductDetails;

// const [product, setProduct] = useState(null);

// console.log("productId from detail", productId);

// useEffect(() => {
//     const fetchProductDetails = async () => {
//         try {
//             const response = await axios.get(`http://localhost:5000/products/${productId}`);
//             console.log("product details response: ", response.data);
//             setProduct(response.data);
//         } catch (error) {
//             console.error("Error fetching product details:", error);
//             setProduct(null);
//         }
//     };

//     fetchProductDetails();
// }, [productId]);

// if (!product) {
//     return <p>Loading...</p>; // également afficher un message d'erreur si le produit n'est pas trouvé.
// }
