import createBottomBarElement from '../components/bottomBar.js';
import createCartItemElement from '../components/CartItem.js';

export default class Cart {
    constructor(cartItems) {
        this.cartItems = cartItems;
        this.renderCart();
    }

    updateProductQuantity(productId, productCount) {
        const item = this.cartItems.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, item.quantity + productCount);
            this.renderCart();
        }
    }

    removeProduct(productId) {
        this.cartItems = this.cartItems.filter(item => item.id !== productId);
        this.renderCart();
    }

    getTotalPrice() {
        return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0) || 0;
    }

    renderCart() {
        const cartContainer = document.getElementById('cart');
        cartContainer.innerHTML = '';

        this.cartItems?.forEach(item => {
            const itemElement = createCartItemElement(item);
            cartContainer.appendChild(itemElement);
        });

        createBottomBarElement(this.getTotalPrice())
        this.addEventListeners();
    }

    addEventListeners() {
        document.querySelectorAll('.increment, .decrement, .remove').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = parseInt(event.target.getAttribute('data-id'));
                if (event.target.classList.contains('increment')) {
                    this.updateProductQuantity(productId, 1);
                } else if (event.target.classList.contains('decrement')) {
                    this.updateProductQuantity(productId, -1);
                } else if (event.target.classList.contains('remove')) {
                    this.removeProduct(productId);
                }
            });
        });
    }
}
