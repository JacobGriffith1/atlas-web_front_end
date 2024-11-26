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
    /** paragraph.innerHTML = `Cookies: ${cookies}`; <===== 0/1 VERSION */
    paragraph.innerHTML = `Email: ${getCookie("email")} - Firstname: ${getCookie("firstname")}`;
    document.body.appendChild(paragraph);
}

/** getCookie */
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");
        if (cookie[0] === name) return cookie[1];
    }
    return "";
}