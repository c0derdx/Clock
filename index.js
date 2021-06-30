setInterval(setClock, 1000);

const secondHand = document.querySelector("#second__hand");
const minuteHand = document.querySelector("#minute__hand");
const hourHand = document.querySelector("#hour__hand");

function setClock() {
    const currentDate = new Date();
    const secondRatio = (currentDate.getSeconds())/60;
    const minuteRatio = (secondRatio + currentDate.getMinutes())/60;
    const hourRatio =  (minuteRatio + currentDate.getHours())/12;
    rotate(secondHand, secondRatio);
    rotate(minuteHand, minuteRatio);
    rotate(hourHand, hourRatio);
}

function rotate(element, ratio) {
    element.style.setProperty("--rotation", ratio*360);
}

setClock();