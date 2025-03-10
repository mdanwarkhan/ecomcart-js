import priceFormatter from "../assets/utils/priceFormatter.js";

function createBottomBarElement(price) {
    const bottomBar = document.getElementById('bottom-bar');
    if (!bottomBar) return;

    if (price === 0) {
        bottomBar.remove(bottomBar);
        location.reload();
        return
    }

    bottomBar.innerHTML = '';

    const bottomBarEl = document.createElement('div');
    bottomBarEl.className = "bottom-bar-container";

    bottomBarEl.innerHTML = `
        <span>Total: ${priceFormatter(price, 1)}</span>
        <button class="btn btn-secondary">Proceed to checkout</button>
    `;

    bottomBar.appendChild(bottomBarEl);
}

export default createBottomBarElement;
