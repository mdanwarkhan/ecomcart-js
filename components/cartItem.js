import priceFormatter from '../assets/utils/priceFormatter.js'

function createCartItemElement(item) {
  if (!item || !item.title || !item.quantity || !item.id) {
    throw new Error('Invalid item object');
  }
  const itemElement = document.createElement('div');
  itemElement.className = 'cart-item-container';
  itemElement.innerHTML = `
        <div class="left-sub-container">
            <img src="${item.image}"/> 
            <div class="btn-container">
              <button class="btn btn-primary decrement" ${item.quantity < 2 ? 'disabled' : ''} data-id="${item.id}">-</button>
              <div class="quantity">${item.quantity}</div>
              <button class="btn btn-primary increment" data-id="${item.id}">+</button>
            </div>
        </div>

        <div class="right-sub-container">
          <h3>${item.title}</h3>
          <div>${priceFormatter(item.price, item.quantity)}</div>
          <button class="btn btn-danger remove" data-id="${item.id}">Remove</button>
        </div>
    `;

  return itemElement;
}

export default createCartItemElement