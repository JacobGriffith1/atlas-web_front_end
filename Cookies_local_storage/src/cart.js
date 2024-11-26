/**--------------------TASK 6--------------------*/

const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

function addItemToCart(item){
    window.localStorage.setItem(item, true);
    displayCart();
}

function createStore(){
    const uList = document.createElement('ul');
    document.body.appendChild(uList);

    for (const item of availableItems){
        const listItem = document.createElement('li');
        listItem.innerHTML = item;
        listItem.addEventListener('click', function(){
            addItemToCart(this.innerHTML);
        });
        uList.appendChild(listItem);
    }
}

function displayCart(){
    if (window.localStorage.length){
        let msg = document.querySelector('#cartMsg');

        if (!msg){
            msg = document.createElement('p');
            msg.setAttribute('id', 'cartMsg');
            document.body.appendChild(msg);
        }
        msg.innerHTML = `You previously had ${window.localStorage.length} items in your cart`
    }
}

window.onload = function(){
    if (!window.localStorage){
        window.alert("Sorry, your browser does not support Web storage. Try again with a better one")
    } else {
        console.log("localStorage exists")
        createStore();
        displayCart();
    }
};