


const body = document.body;
console.log(window.innerWidth);


const normalScreen = "normal"
const wideScreen = "wide"
const widerScreen = "wider"


function resizeColorChange() {
  const width = window.innerWidth;
  console.log(width);
  if (width < 600) {
    body.classList.add(normalScreen);
    body.classList.remove(wideScreen, widerScreen);
  } else if (width >= 600 && width < 800) {
    body.classList.add(wideScreen);
    body.classList.remove(normalScreen);
  } else {
    body.classList.remove(wideScreen);
    body.classList.add(widerScreen);
  }
}

window.addEventListener("resize", resizeColorChange);
