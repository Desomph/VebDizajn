var elements;
const log = () => {
    Array.from(document.getElementsByClassName("game-box")).forEach(function (item) {
        item.setAttribute("style", `background-color: rgb(${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)});`);
        console.log("didit");
    });
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const ready = (event) => {
    var interval = setInterval(log, 2000);
}

window.addEventListener("load", ready);