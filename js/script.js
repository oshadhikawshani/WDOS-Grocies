// Load products for given cateory

fetch('product.json')
  .then(response => response.json())
  .then(data => {
    
    // Category name set in the page using this element
    const categoryName = document.getElementById('category');
    
    const electronicsCategory = data.categories.find(category => category.name === categoryName.innerText);
    const productsList = electronicsCategory.products;

    const productContainer = document.getElementById('product-list');

    productsList.forEach(product => {
      const productItem = document.createElement('div');
      productItem.className = 'product';
      productItem.innerHTML = innerHTML = `
    
      <h1>${product.name}</h1>
      <p>${product.Description}<br></p>
      <img src="${product.image}" alt="${product.name}" class="daily_product_h_w">
      <p>Price: Rs ${product.price}<br>
      Quantity : <input type="number" id="quantity_${product.productid}" value="1" min="1" max="${product.quantity}"><br>&nbsp;
    `;

      const buttonDiv = document.createElement('div');
      buttonDiv.className = "button-container";

      const addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.className = 'add-to-cart';
      addToCartButton.addEventListener('click', () => addToCart(product));
      buttonDiv.appendChild(addToCartButton); 
      productItem.appendChild(buttonDiv); 

      productContainer.appendChild(productItem); 
    });
  })
  .catch(error => console.error('Error fetching data:', error));

  // Add product to the cart
  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Find the index of the product in the cart
    const index = cart.findIndex(item => item.name === product.name);

    // Quantity entered by the customer
    product.orderQuantity = document.getElementById("quantity_" + product.productid).value;
  
    if (index !== -1) {
      // If the product exists, overwrite it
      cart[index] = product;
      console.log('Product updated to cart:', product);
    } else {
      // If the product doesn't exist, add it to the cart
      cart.push(product);
      console.log('Product added to cart:', product);
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();     
  }


  // Add product to the cart
  function buyNow(product) {
    let cart = JSON.parse(localStorage.getItem('buynow')) || [];
  
    // Find the index of the product in the cart
    const index = cart.findIndex(item => item.name === product.name);

    // Quantity entered by the customer
    product.orderQuantity = document.getElementById("quantity_" + product.productid).value;
  
    if (cart.length > 0) {
      // If the any product exists, overwrite it
      cart[0] = product;
    } else {
      // If the product doesn't exist, add it to the cart
      cart.push(product);      
    }
    console.log('Product is added to buy now: ', product);
  
    localStorage.setItem('buynow', JSON.stringify(cart));
    window.location.href = "buy-now.html";    
  }

    // Show cart image with number of items
  function showCart(){

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemCount = cart.length;

    if (cartItemCount > 0) {
      document.getElementById('cart-container').innerHTML = `
        <a href="cart.html">` + cartItemCount + `<img src="image/Cart.png" class="icons_img_w_h"></a>
      `;
    } else {
      document.getElementById('cart-container').innerHTML = ``;
    }
  }

   // Show card image when page starts
  document.addEventListener('DOMContentLoaded', function() {
    showCart();
  });
