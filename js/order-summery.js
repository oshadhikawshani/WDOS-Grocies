// JavaScript show shopping Cart
function loadCart() {
    const cartTable = document.getElementById('cart-table');
    const cartBody = cartTable.getElementsByTagName('tbody')[0];

    while (cartBody.firstChild) {
        cartBody.removeChild(cartBody.firstChild);
    }

    let total = 0;
    const savedCart = localStorage.getItem('cart');
    let cart = [];

    if (savedCart) {
        cart = JSON.parse(savedCart);
    }

    cart.forEach(item => {
        const row = document.createElement('tr');
        const productCell = document.createElement('td');
        const quantityCell = document.createElement('td');
        const priceCell = document.createElement('td');
        const totalCell = document.createElement('td');

        productCell.textContent = item.name;
        quantityCell.textContent = item.orderQuantity;
        priceCell.textContent = item.price;
        totalCell.textContent = item.price * item.orderQuantity;
        total += item.price * item.orderQuantity;

        row.appendChild(productCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);
        row.appendChild(totalCell);
        cartBody.appendChild(row);
    });

    document.getElementById("orderTotal").textContent = total.toFixed(2);
}

// Show cart when page starts
document.addEventListener('DOMContentLoaded', function () {
    loadCart();
    // Refresh cart every second
    setInterval(loadCart, 1000);
});
