"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
    const [product, setProduct] = useState(null);

    const productId = props.productId;
    console.log("props from detail", props);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/products/${productId}`);
                console.log("product details response: ", response.data);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
                setProduct(null);
            }
        };

        fetchProductDetails();
    }, [productId]);

    if (!product) {
        return <p>Loading...</p>; // également afficher un message d'erreur si le produit n'est pas trouvé.
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>
                Price: {product.price.value} {product.price.currency[0]}
            </p>
        </div>
    );
};

export default ProductDetails;
