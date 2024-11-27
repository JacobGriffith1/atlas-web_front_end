/**--------------------TASK 6, 7--------------------*/
/** 
 * all instances of localStorage are replaced with
 * sessionStorage as of task 7.
 */

const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

function addItemToCart(item){
    window.sessionStorage.setItem(item, true);
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
    if (window.sessionStorage.length){
        let msg = document.querySelector('#cartMsg');

        if (!msg){
            msg = document.createElement('p');
            msg.setAttribute('id', 'cartMsg');
            document.body.appendChild(msg);
        }
        if (window.sessionStorage.length > 1){
            msg.innerHTML = `You previously had ${window.sessionStorage.length - 1} items in your cart`
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