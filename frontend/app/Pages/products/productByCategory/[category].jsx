import { useRouter } from "next/router";
import ProductListByCategory from "./page";

function ProductByCategory() {
    const router = useRouter();
    const { category } = router.query;

    // Affichez les produits de la catégorie sélectionnée
    return <ProductListByCategory category={category} />;
}

export default ProductByCategory;
