let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart)

let mainContainer = document.querySelector('div')

let totalCartPrice= document.getElementById('totalPrice')


    function displayCarts(){

    let total = 0;
    cart.map((details,index) => {
    console.log(details)

    let card = document.createElement('section')
    card.className = 'card'

    let cardImg = document.createElement('img')
    cardImg.className="imgcontainer"
    cardImg.src = details.productImg

    let cardName = document.createElement('h4')
    cardName.innerText = details.productName

    let cardPrice = document.createElement('p')
    cardPrice.innerText = details.productPrice

    let btnbuy = document.createElement("button")
    btnbuy.className = "btnbuy"
    btnbuy.innerText = "Buy Now"
    
    btnbuy.onclick = ()=>{
    alert(`Thank You for shoping with us. Your total bill is ${details.productPrice}`)
    removecartitem(index);
    window.location.href= "./Home.html"
    }

    let btnremove = document.createElement("button")
    btnremove.innerText = "Remove Item"
    btnremove.style.background = 'linear-gradient(90deg, #d6381c, #e50a0e)'
    btnremove.style.margin='6px'

    btnremove.onclick = () => removecartitem(index);
   


    document.body.appendChild(mainContainer)
    mainContainer.appendChild(card)
    card.append(cardImg,cardName,cardPrice,btnbuy,btnremove)

    let itemprice = parseFloat(details.productPrice.replace("₹", ""))
    console.log(itemprice)

    total=total+itemprice
    console.log(total)

    })

    totalCartPrice.textContent=total;
    console.log(totalCartPrice)
    document.body.appendChild(totalCartPrice)
 }

 displayCarts()

let clearCart = document.getElementById('clearCart')
console.log(clearCart)

clearCart.onclick = ()=> {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart))
    window.location.href= "./Cart.html"
}

    let buyall = document.getElementById('buyall')
    buyall.onclick = ()=>{
    alert(`Thank You for shoping with us. Your total bill ₹${totalCartPrice.textContent}`)

    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart))
    window.location.href= "./Home.html"
    }

   function  removecartitem(index){
        console.log(index, "index from remove cart")
        cart.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(cart))

        
        displayCarts()
    }



