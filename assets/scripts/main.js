import { fetchCart } from "../../services/cartService.js";
import Cart from "../../pages/cart.js";

console.log('main script loaded')

document.addEventListener('DOMContentLoaded', async () => {
    await updateCart(2);
});

async function updateCart(userId) {
    const cartItems = await fetchCart(userId);
    new Cart(cartItems);
    console.log('Rendered cart');
}