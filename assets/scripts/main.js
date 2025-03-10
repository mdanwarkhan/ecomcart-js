import { fetchCart } from "../../services/cartService.js";
import Cart from "../../pages/cart.js";

console.log('main script loaded')

document.addEventListener('DOMContentLoaded', async () => {
    await updateCart(2);
});

async function updateCart(userId) {
    const cartItems = await fetchCart(userId);
    const cart = new Cart(cartItems);
    const totalPrice = cart.getTotalPrice();
    cart.renderCart()
    console.log(totalPrice);
    console.log('Rendered cart');
}