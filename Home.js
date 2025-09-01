let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartCount = document.getElementById("cartCount");
console.log(cartCount);

//to increment the count of cart
function updateCartCount() {
  cartCount.textContent = cart.length;
}

let buttons = document.querySelectorAll('button')
console.log(buttons)
buttons.forEach((btn) => {
    console.log(btn)

    btn.onclick = (e) => {

        let products = e.target.closest('.card')
        console.log(products)

        let productImg = products.querySelector('img').src
        let productName = products.querySelector('h4').textContent
        let productPrice = products.querySelector('p').textContent

        let item = {productImg,productName,productPrice}
         cart.push(item);


        localStorage.setItem("cart",JSON.stringify(cart))
        console.log(item);

        updateCartCount();

    }
    
})