const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

const body = document.querySelector("body")

function colorChange(){
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    const degree = Math.floor(Math.random() * 360)
    body.style.background = `linear-gradient(${degree}deg, ${color1}, ${color2})`;
};

const colorButton = document.body.querySelector("button");
colorButton.addEventListener("click", colorChange);