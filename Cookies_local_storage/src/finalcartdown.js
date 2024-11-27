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

function displayCart(){
    let cart = document.querySelector('#cart')
    if (!cart){
        cart = document.createElement('h2');
        cart.setAttribute('id', 'cart');
        cart.innerHTML = 'Your cart:';
        document.body.appendChild(cart);
    }

    let trolley = document.querySelector('#trolley');
    if (!trolley){
        trolley = document.createElement('div');
        trolley.setAttribute('id', 'trolley');
        document.body.appendChild(trolley);
    } else {
        trolley.innerHTML = '';
    }

    updateCart();
}

function updateCart(){
    const cart = getCartFromStorage();
    const trolley = document.querySelector('#trolley');
    const merch = document.createElement('ul');
    let empty = document.querySelector('#empty');
    let clear = document.querySelector('#clear');
    trolley.appendChild(merch);

    if (!empty){
        empty = document.createElement('li');
        empty.setAttribute('id', 'empty');
        empty.innerHTML = 'Your cart is empty';
        merch.appendChild(empty);
    }
    if (!clear){
        clear = document.createElement('li');
        clear.setAttribute('id', 'clear');
        clear.innerHTML = 'Clear my cart';
        clear.style.display = 'none';
        clear.addEventListener('click', clearCart);
        merch.appendChild(clear);
    }

    if (!Object.keys(cart).length){
        empty.style.display = 'list-item';
        clear.style.display = 'none';
    } else {
        empty.style.display = 'none';
        clear.style.display = 'list-item';
        for (const item in cart){
            const cartList = document.createElement('li');
            const remove = document.createElement('span');

            cartList.setAttribute('id', item);
            cartList.innerHTML = `${item} x ${cart[item]}`;

            remove.innerHTML = '(remove)';
            remove.addEventListener('click', function(){
                removeItemFromCart(this.parentElement.id);
            });

            cartList.appendChild(remove);
            merch.appendChild(cartList);
        }
    }
}

window.onload = function(){
    if (!window.sessionStorage){
        window.alert("Sorry, your browser does not support Web storage. Try again with a better one")
    } else {
        console.log("sessionStorage exists")
        createStore();
        displayCart();
    }
};