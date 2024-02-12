import React from "react";
import OneProductDetail from "../../components/OneProductDetail";
import { useRouter } from "next/router";

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;

    console.log("id : ", id);

    return (
        <div>
            <h1>Product Page</h1>
            {id && <OneProductDetail productId={id} />}
        </div>
    );
};

export default ProductPage;
