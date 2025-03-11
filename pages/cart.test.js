import Cart from './cart.js';
import createBottomBarElement from '../components/bottomBar.js';
import createCartItemElement from '../components/CartItem.js';

jest.mock('../components/bottomBar.js', () => jest.fn());
jest.mock('../components/CartItem.js', () => jest.fn());

describe('Cart', () => {
    let cart;
    let cartItems;
    let cartContainer;

    beforeEach(() => {
        document.body.innerHTML = '<div id="cart"></div>';
        cartContainer = document.getElementById('cart');

        cartItems = [
            { id: 1, title: 'Product 1', image: 'p1.png', price: 10, quantity: 1 },
            { id: 2, title: 'Product 2', image: 'p2.png', price: 20, quantity: 2 },
        ];

        createCartItemElement.mockImplementation((item) => {
            const div = document.createElement('div');
            div.classList.add('cart-item');
            div.setAttribute('data-id', item.id);
            div.innerHTML = `
                <button class="increment" data-id="${item.id}">+</button>
                <button class="decrement" data-id="${item.id}">-</button>
                <button class="remove" data-id="${item.id}">x</button>
            `;
            return div;
        });

        cart = new Cart(cartItems);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should initialize with cart items and render the cart', () => {
        expect(cart.cartItems).toEqual(cartItems);
        expect(cartContainer.children.length).toBe(2);
        expect(createBottomBarElement).toHaveBeenCalledWith(50);
    });

    it('should update product quantity and re-render increment', () => {
        cart.updateProductQuantity(1, 1);
        expect(cart.cartItems[0].quantity).toBe(2);
    });

    it('should update product quantity and re-render decrement', () => {
        cart.updateProductQuantity(2, -1);
        expect(cart.cartItems[1].quantity).toBe(1);
    });

    it('should remove product and re-render', () => {
        cart.removeProduct(1);
        expect(cart.cartItems.length).toBe(1);
        expect(cart.cartItems[0].id).toBe(2);
    });

    it('should calculate total price correctly', () => {
        expect(cart.getTotalPrice()).toBe(50);
    });

    it('should add event listeners to increment, decrement, and remove buttons', () => {
        const incrementButton = cartContainer.querySelector('.increment');
        const decrementButton = cartContainer.querySelector('.decrement');
        const removeButton = cartContainer.querySelector('.remove');

        incrementButton.click();
        expect(cart.cartItems[0].quantity).toBe(2);

        decrementButton.click();
        expect(cart.cartItems[0].quantity).toBe(1);

        removeButton.click();
        expect(cart.cartItems.length).toBe(1);
    });
});