import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        if (id) {
            const apiUrl = `http://localhost:5000/products/${id}`;
            console.log("API URL:", apiUrl);

            axios
                .get(apiUrl)
                .then((response) => {
                    setOneProduct(response.data);
                })
                .catch((error) => console.error(error));
        }
    }, [id]);

    console.log("Product details:", oneProduct);

    return (
        <div>
            <h1>Product Details</h1>
            {oneProduct && (
                <>
                    <p>Product Name: {oneProduct.name}</p>
                    <p>Product Price: {oneProduct.price}</p>
                    <p>Product Description: {oneProduct.description}</p>
                </>
            )}
        </div>
    );
};

export default ProductDetails;
