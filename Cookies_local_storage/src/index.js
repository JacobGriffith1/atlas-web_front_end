/** setCookies */
function setCookies() {
    const firstName = document.querySelector("#firstname").value;
    const email = document.querySelector("#email").value;

    document.cookie = `firstname=${firstName}; max-age=864000`;
    document.cookie = `email=${email}; max-age=864000`;
    /** max-age appended for task 2 */
}

/** showCookies */
function showCookies() {
    const cookies = document.cookie;
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `Cookies: ${cookies}`;
    document.body.appendChild(paragraph);
}