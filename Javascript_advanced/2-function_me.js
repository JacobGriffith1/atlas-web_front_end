function welcomeMessage(fullName) {
    let mssg = "Welcome ";

    return function() {
        alert(mssg + fullName);
    };
};

let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");

guillaume();
alex();
fred();
