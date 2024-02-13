"use client";
import React, { useEffect } from "react";

export default function Product({ params }) {
    const productId = params.productId;

    useEffect(() => {}, [productId]);

    return (
        <div className="w-full h-[300px] flex justify-center items-center">
            <h1>Details du produit ID : {productId}</h1>
            <h2></h2>
        </div>
    );
}
