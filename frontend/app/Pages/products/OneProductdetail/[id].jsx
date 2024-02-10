import React from "react";
import ProductDetails from "./ProductDetails";
import { useRouter } from "next/router";

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Product Page</h1>
            {id && <ProductDetails productId={id} />}
        </div>
    );
};

export default ProductPage;
