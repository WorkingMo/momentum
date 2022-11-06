const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    const HH = date.getHours().toString().padStart(2,"0");
    const MM = date.getMinutes().toString().padStart(2,"0");
    const SS = date.getSeconds().toString().padStart(2,"0");
    clock.innerText = `${HH}:${MM}:${SS}`;
}

getClock()
setInterval(getClock, 1000);