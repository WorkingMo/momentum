const countdown = document.querySelector("h2#countdown");
const utcChristmas = Date.UTC(2022, 11, 25, 0, 0, 0, 0);

function handleCountdown() {
    const date = new Date(utcChristmas - Date.now());
    const daysDifference = Math.ceil(date/(1000*3600*24));
    const DDD = String(daysDifference).padStart(3, "0");
    const HH = String(date.getHours()).padStart(2, "0");
    const MM = String(date.getMinutes()).padStart(2, "0");
    const SS = String(date.getSeconds()).padStart(2, "0");
    countdown.innerText = `${DDD}d ${HH}h ${MM}m ${SS}s`;
}

handleCountdown()
setInterval(handleCountdown, 1000);