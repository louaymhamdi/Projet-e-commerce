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
  // Automatically show the cart modal if it's not already visible
  if (document.getElementById('cartModal').style.display !== 'block') {
    toggleCartModal();
  }
}


function updateCartUI() {
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItemsContainer.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const productElement = document.createElement('div');
    productElement.innerText = `${item.name}: €${item.price} x ${item.quantity}`;
    cartItemsContainer.appendChild(productElement);
    total += item.price * item.quantity;
  });
  document.getElementById('cartTotal').innerText = `€${total.toFixed(2)}`;
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('total', total.toFixed(2)); 
}


function toggleCartModal() {
  const cartModal = document.getElementById('cartModal');
  cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
  alert('Checkout not implemented.');
}
