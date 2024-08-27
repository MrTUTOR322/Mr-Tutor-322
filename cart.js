let cart = [];

function addToCart(fileName) {
    cart.push(fileName);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });
}

function checkout() {
    alert('Proceed to checkout');
}
