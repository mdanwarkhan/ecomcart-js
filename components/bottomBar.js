import priceFormatter from "../assets/utils/priceFormatter.js";

function createBottomBarElement(price) {
    const bottomBar = document.getElementById('bottom-bar');
    if (!bottomBar) return;

    if (price === 0) {
        bottomBar.innerHTML = '';
        location.reload();
        return;
    }

    bottomBar.innerHTML = '';

    const bottomBarEl = document.createElement('div');
    bottomBarEl.classList.add("bottom-bar-container");

    bottomBarEl.innerHTML = `
        <h3>Total: ${priceFormatter(price, 1)}</h3>
        <button class="btn btn-secondary">Proceed to checkout</button>
    `;

    bottomBar.appendChild(bottomBarEl);
}

export default createBottomBarElement;
