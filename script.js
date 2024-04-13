// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" onclick="addToCart(${product.id})" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

let cartData = JSON.parse(sessionStorage.getItem('data'));
const cartList = document.getElementById("cart-list");
// Render cart list
function renderCart() {
	if (cartData!==null) {
		cartList.innerHTML = '';
		cartData.forEach((item)=> {
			const li = document.createElement("li");
		    li.innerHTML = `${item.name} - $${item.price} <button class="add-to-cart-btn" onclick="removeFromCart(${item.id})" data-id="${item.id}">Remove from Cart</button>`;
		    cartList.appendChild(li);
		})
	}
	sessionStorage.setItem('data',JSON.stringify(cartData));
}

// Add item to cart
function addToCart(productId) {
	const item = products.filter((v)=>v.id===productId)[0];
	// if (cartData===null) {
	// 	cartData = [item];
	// } else {
		
	// 	cartData.sort((a,b)=>a.price-b.price);
	// }
	cartData.push({id:item.id, name: item.name, price: item.price});
	cartData.sort((a,b)=>a.price-b.price);
	renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
	// const item = products.filter((v)=>v.id===productId)[0];
	// if (cartData!==null) {
	// 	const index = cartData.indexOf(item);
	// 	if (index>-1) {
	// 		cartData.splice(index, 1);
	// 	}
		
	// 	renderCart();
	// }
	cartData= cartData.filter(v=>v.id!==productId);
	renderCart()
}

// Clear cart
function clearCart() {
	cartData = [];
	// sessionStorage.clear();
	renderCart();
}

// Initial render
renderProducts();
renderCart();
