
/*const loginForm = document.querySelector("#login-form");
console.log("Searched from the loginForm after stated it.")
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// const loginButton = document.querySelector("#login-form button");
*/

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit() {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

/*function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(username);
    if (username === "") {
        alert("Please write your name.");
    } else if (username.length > 15) {
        alert("Your name is too long.");
    } else if (username.length < 3) {
        alert("Your name is too short.");
    }
} 

loginButton.addEventListener("click", onLoginBtnClick);
*/
/*const link = document.querySelector("a")

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
}

link.addEventListener("click",handleLinkClick);
*/

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}! Welcome =)`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//Control Flow!
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername);
}