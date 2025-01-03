/** setCookiesAndShowWelcomeMessage */
function setCookiesAndShowWelcomeMessage(event) {
    event.preventDefault();

    const firstName = document.querySelector("#firstname").value;
    const email = document.querySelector("#email").value;

    if (firstName && email) {
        Cookies.set("firstname", firstName, {expires: 10, path: `/`});
        Cookies.set("email", email, {expires: 10, path: `/`});
    }
    showWelcomeMessageOrForm();
}

/** setCookies | unused as of task 5 */
function setCookies(event) {
    event.preventDefault();

    const firstName = document.querySelector("#firstname").value;
    const email = document.querySelector("#email").value;

    if (firstName && email) {
        document.cookie = `firstname=${firstName}; max-age=864000; path=/`;
        document.cookie = `email=${email}; max-age=864000; path=/`;
        /** max-age appended for task 2 */
    }
    showWelcomeMessageOrForm();
    /** function added for task 4 */
}

/** showCookies | unused as of task 4*/
function showCookies() {
    const cookies = document.cookie;
    const paragraph = document.createElement("p");
    /** paragraph.innerHTML = `Cookies: ${cookies}`; <===== 0/1 VERSION */
    paragraph.innerHTML = `Email: ${getCookie("email")} - Firstname: ${getCookie("firstname")}`;
    document.body.appendChild(paragraph);
}

/** getCookie | unused as of task 5 */
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");
        if (cookie[0] === name) return cookie[1];
    }
    return "";
}

/** showForm */
function showForm() {
    const msg = document.querySelector("#welcomeMsg");
    if (msg) {
        msg.remove();
    }
    document.querySelector("#divForm").style.display = "block";
}

/** hideForm */
function hideForm() {
    document.querySelector("#divForm").style.display = "none";
}

/** deleteCookiesAndShowForm */
function deleteCookiesAndShowForm() {
    Cookies.remove("firstname");
    Cookies.remove("email");
    /** replaced with jscookie in task 5
    let date = new Date();
    date.setTime(date.getTime() - 1);

    document.cookie = `firstname=; expires=${date.toUTCString()}; path=/`;
    document.cookie = `email=; expires=${date.toUTCString()}; path=/`;
    
    console.log("Cookies:", document.cookie);
    */
    showForm();
}

/** showWelcomeMessageOrForm */
function showWelcomeMessageOrForm() {
     if (!document.cookie || !Cookies.get("firstname") || !Cookies.get("email")) {
        /**(!document.cookie || !getCookie("firstname") || !getCookie("email")) { <===== LINE ALTERED IN TASK 5*/
        showForm();
    } else {
        const welcome = document.createElement("div");
        welcome.setAttribute("id", "welcomeMsg");
        welcome.innerHTML = `<h1>Welcome: ${Cookies.get("firstname")} <a class="logout" onclick="deleteCookiesAndShowForm(event)">(logout)</a></h1>`;
        document.body.appendChild(welcome);
        hideForm();
    }
}

/** ENGAGE | showWelcomeMessageOrForm */
document.addEventListener("DOMContentLoaded", showWelcomeMessageOrForm);