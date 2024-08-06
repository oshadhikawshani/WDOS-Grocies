// Load categories into the main page
fetch('/products/product.json')
  .then(response => response.json())
  .then(data => {
     
    const categoryList = data.categories;

    const productContainer = document.getElementById('categoryList');

    categoryList.forEach(category => {
      const productItem = document.createElement('div');
      productItem.innerHTML = innerHTML = `
        <a href="${category.url}">
             <img src="${category.image}" alt="" srcset="" class="top_selling_h_and_w">
        </a>
          <h1 class="flextopselling_heading">${category.name}</h1>
    `;
    productContainer.appendChild(productItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
















  document.addEventListener('DOMContentLoaded', () => {
    const payButton = document.getElementById('payButton');

    payButton.addEventListener('click', () => {
        // Get form data
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const tel = document.getElementById('tel').value;
        const secondTel = document.getElementById('second-tel').value;
        const gmail = document.getElementById('gmail').value;
        const address = document.getElementById('address').value;
        const zipcode = document.getElementById('zipcode').value;
        const cardNumber = document.getElementById('cardnumber').value;
        const expireDate = document.getElementById('expire-date').value;
        const password = document.getElementById('password').value;

        // Get cart data
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let cartDetails = cart.map(item => {
            return {
                productName: item.name,
                quantity: item.orderQuantity,
                total: item.price * item.orderQuantity
            };
        });

        // Log data to the console
        console.log("Name:", fname, lname);
        console.log("Phone Numbers:", tel, secondTel);
        console.log("Gmail:", gmail);
        console.log("Address:", address);
        console.log("Zip Code:", zipcode);
        console.log("Card Number:", cardNumber);
        console.log("Expire Date:", expireDate);
        console.log("Password:", password);
        console.log("Cart Details:", cartDetails);

        // Show alert with thank you message and date
        const currentDate = new Date();
        alert(`Thank you for your order! Checkout Date: ${currentDate.toLocaleDateString()}`);

        // Clear localStorage
        localStorage.removeItem('cart');

        // Optionally reset the form
        document.getElementById('checkoutForm').reset();
    });
});
