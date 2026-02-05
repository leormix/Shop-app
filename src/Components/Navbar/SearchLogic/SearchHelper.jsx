// import { products } from "../../../data/products";

export function SearchHelper(products, searchText) {

    if (!Array.isArray(products)) return [];
    if (typeof searchText !== 'string') return [];

    const normalizedText = searchText.trim().toLocaleLowerCase();
    if (normalizedText === '') return [];

    return products.filter((product) => {
        if (!product || typeof product.name !== 'string') return false;

        return product.name.toLocaleLowerCase().includes(normalizedText);
    })
}