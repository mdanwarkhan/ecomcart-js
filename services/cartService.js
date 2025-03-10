import { showLoader, hideLoader } from "../assets/utils/loaderStatus.js";

const fetchWrapper = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
};

const fetchProductDetails = async (productId, quantity) => {
    const product = await fetchWrapper(`https://fakestoreapi.com/products/${productId}`);
    return { ...product, quantity };
};

export const fetchCart = async (id) => {
    showLoader()
    try {
        const cartDetail = await fetchWrapper(`https://fakestoreapi.com/carts/${id}`);
        const productPromises = cartDetail.products.map(p => fetchProductDetails(p.productId, p.quantity));
        const ProductDetails = await Promise.all(productPromises);
        return ProductDetails;
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        hideLoader()
    }
};