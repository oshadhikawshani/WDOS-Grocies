function loadCart() {
    const cartTable = document.getElementById('cart-table');
    const cartBody = cartTable.getElementsByTagName('tbody')[0];

    // Clear the table body
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
        const totalCell = document.createElement('td');

        const quantityInput = document.createElement('input');

        productCell.textContent = item.name;
        totalCell.textContent = `Rs ${(item.price * item.orderQuantity).toFixed(2)}`;
        total = total + (item.price * item.orderQuantity);

        quantityInput.type = "number";
        quantityInput.value = item.orderQuantity;
        quantityInput.min = 0;
        quantityInput.max = item.quantity;
        quantityInput.id = "quantity_" + item.productid;
        quantityInput.disabled = true; // Make it read-only
        quantityCell.appendChild(quantityInput);

        row.appendChild(productCell);
        row.appendChild(quantityCell);
        row.appendChild(totalCell);
        cartBody.appendChild(row);
    });

    document.getElementById("orderTotal").textContent = `Total: Rs ${total.toFixed(2)}`;
}

// Call loadCart to display the cart when the page loads
document.addEventListener('DOMContentLoaded', loadCart);



function placingcart  (){
    const carttable = document.getElementById

}
