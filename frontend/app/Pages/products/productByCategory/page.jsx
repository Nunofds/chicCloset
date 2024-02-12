import axios from "axios";
import React, { useState, useEffect } from "react";

// ce fichier se nommes page.jsx car il est utilisé localisé dans le dossier page puis dans le dossier products

function ProductListByCategory({ category }) {
    const [products, setProducts] = useState([]);
    console.log("Category from ProductListByCategory:", category);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/products?category=${category}`)
            .then((response) => {
                setProducts(response.data);
                console.log("Results from ProductListByCategory:", response.data);
            })
            .catch((error) => console.error(error));
    }, [category]);

    return (
        <div>
            {/* <h2>Products for category: {category}</h2> */}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>
                            Price: {product.price.value} {product.price.currency[0]}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductListByCategory;
