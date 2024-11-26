/** setCookies */
function setCookies() {
    const firstName = document.querySelector("#firstname").value;
    const email = document.querySelector("#email").value;

    document.cookie = `firstname=${firstName}`;
    document.cookie = `email=${email}`;
}

/** showCookies */
function showCookies() {
    const cookies = document.cookie;
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `Cookies: ${cookies}`;
    document.body.appendChild(paragraph);
}