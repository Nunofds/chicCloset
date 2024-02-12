import React from "react";
import { useRouter } from "next/router";
import ProductDetails from "./page";

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;

    console.log("id : ", id);

    return (
        <div>
            <h1>Product Page</h1>
            if (id) {<ProductDetails productId={id}></ProductDetails>}
        </div>
    );
};

export default ProductPage;
