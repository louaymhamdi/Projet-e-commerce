const cart = [];

function addToCart(product) {
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({...product, quantity: 1});
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItemsContainer.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const productElement = document.createElement('div');
    productElement.className = 'cart-item'; // Add a class for styling
    productElement.innerHTML = `
      <div class="cart-item-info">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">$${item.price}</span>
        <div class="cart-item-quantity">
          <button class="quantity-decrease" onclick="changeQuantity('${item.id}', -1)">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-increase" onclick="changeQuantity('${item.id}', 1)">+</button>
        </div>
        <span class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</span>
      </div>`;
    cartItemsContainer.appendChild(productElement);
    total += item.price * item.quantity;
  });

  // Update the cart total
  document.getElementById('cartTotal').innerText = `Total: $${total.toFixed(2)}`;
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('total', total.toFixed(2));

  // Automatically show the cart if it's not already visible
  const cartModal = document.getElementById('cartModal');
  if (cartModal.style.display !== 'block') {
    cartModal.style.display = 'block';
  }
}

// Function to change quantity from the cart UI
function changeQuantity(productId, change) {
  const productIndex = cart.findIndex(item => item.id === productId);
  if (productIndex > -1) {
    const newQuantity = cart[productIndex].quantity + change;
    if (newQuantity > 0) {
      cart[productIndex].quantity = newQuantity;
    } else {
      // Optionally remove the item from the cart if the quantity is 0
      cart.splice(productIndex, 1);
    }
    updateCartUI(); // Update the UI
  }
}

function toggleCartModal() {
  const cartModal = document.getElementById('cartModal');
  cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
  alert('Checkout not implemented.');
}
