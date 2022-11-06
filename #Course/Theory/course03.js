const h1 = document.querySelector(".hello h1");
console.dir(h1)
/*function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor; //empty let
    if (currentColor === "blue") {
        newColor = "tomato";
    } else{
        newColor = "blue";
    }
    h1.style.color = newColor;
};
*/

/*
// Same result with less JS code! (Better)
function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else{
        h1.classList.add(clickedClass);
    }
};
*/

//Even easier with toggle
function handleTitleClick() {
    h1.classList.toggle("clicked");
};

h1.addEventListener("click", handleTitleClick); // give the event name and function name(without parenthesis)
