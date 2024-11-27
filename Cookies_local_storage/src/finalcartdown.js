/** --------------------TASK 8-------------------- */
const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

function getCartFromStorage(){
    if (window.sessionStorage.cart)
        return JSON.parse(window.sessionStorage.cart);
    return {};
}

function addItemToCart(item){
    const cart = getCartFromStorage();
    if (cart[item]) {
        cart[item] += 1;
    } else {
        cart[item] = 1;
    }

    window.sessionStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function removeItemFromCart(item){
    const cart = getCartFromStorage();
    delete cart[item];

    window.sessionStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function clearCart(){
    window.sessionStorage.clear();
    displayCart();
}

function createStore(){
    const products = document.createElement('h2');
    products.innerHTML = 'Available products:';
    document.body.appendChild(products);
    const forSale = document.createElement('ul');
    document.body.appendChild(forSale);

    for (const item of availableItems){
        const merch = document.createElement('li');
        merch.innerHTML = item;
        merch.addEventListener('click', function(){
            addItemToCart(this.innerHTML);
        });
        forSale.appendChild(merch);
    }
}

function displayCart(){}

function updateCart(){}

window.onload = function(){
    if (!window.sessionStorage){
        window.alert("Sorry, your browser does not support Web storage. Try again with a better one")
    } else {
        console.log("sessionStorage exists")
        createStore();
        displayCart();
    }
};