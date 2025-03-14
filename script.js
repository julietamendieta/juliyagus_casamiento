const daysLeft = document.querySelector(".countdown");
const faltan = document.querySelector(".faltan");
const dias = document.querySelector(".dias");
const message = document.querySelector(".message")

const countdownDate = new Date('11/08/2025').getTime();

let interval = setInterval(() => {
    const now = new Date().getTime();
    let difference = countdownDate - now;
    let days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    if(difference < 0){
        clearInterval(interval);
        message.innerHTML = "¡La fiesta es hoy!"
    } else if(difference > 0 & days > 0 & days < 2){
        faltan.innerHTML = "Falta"
        daysLeft.innerHTML = days;
        dias.innerHTML = "día"
    } else{
        faltan.innerHTML = "Faltan"
        daysLeft.innerHTML = days
        dias.innerHTML = "días"
    }
},1000);
