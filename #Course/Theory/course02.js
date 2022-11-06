const titleObject = document.getElementById("title");

console.dir(titleObject);

titleObject.innerText = "Got you!";
titleObject.className = "Hello";

console.log(titleObject.className);
console.log(titleObject.id);

//const title = document.getElementById("something");
//title.innerText = "Null??";

const ByClassName = document.getElementsByClassName("Bye");
console.log(ByClassName);

const ByTagName = document.getElementsByTagName("h3");
console.log(ByTagName);


console.log("--- querySelector = .className + tag ---");
console.log("--- querySelector = #id form ---");
const Css = document.querySelector(".Inside h3");
console.log(Css);

console.log("querySelector returns 1st element. Use querySelectorAll when choosing all.");

const StyleTest = document.querySelector(".hello h1");
console.dir(StyleTest)
StyleTest.style.color = "blue"

console.log("What is an event? When the user do click, press, turn on, etc., that is an event!")


function handleTitleClick() {
    console.log("title was clicked!");
    StyleTest.style.color = "red";
};
function handleMouseEnter() {
    StyleTest.innerText = "Mouse is here!";
};
function handleMouseLeave() {
    StyleTest.innerText = "Mouse is gone!"
    StyleTest.style.color = "blue";
};

StyleTest.addEventListener("click", handleTitleClick); // give the event name and function name(without parenthesis)
StyleTest.addEventListener("mouseenter", handleMouseEnter);
console.log("You can find the available events on console.dir object's on + eventname properties.");
StyleTest.onmouseleave =  handleMouseLeave;


console.log("------- Window events -------")

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
};
function handleWindowCopy() {
    alert("Don't copy!")
};
function handleWindowOffline() {
    alert("No Wifi!")
};
function handleWindowOnline() {
    alert("Wifi connected! =)")
};

console.log("window object already exists as 'DOCUMENT' aleady exists!")

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);