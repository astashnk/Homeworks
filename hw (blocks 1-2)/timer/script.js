const milseconds = document.querySelector(".timer-milsecnds");
const seconds = document.querySelector(".timer-seconds");
const minutes = document.querySelector(".timer-minutes");

const btnStart = document.querySelector(".timer__button-start");
const btnStop = document.querySelector(".timer__button-stop");

let interval;
let mins = 0;
let secnds = 0;
let milsecnds = 0;

const timer = () => {
    milsecnds++;
    milseconds.innerText = "0" + milsecnds;
    if(milsecnds > 9){
        milseconds.innerText = milsecnds
    }
    if(milsecnds > 99){
        secnds++
        seconds.innerText = "0" + secnds;
        milsecnds = 0;
    }
    if (secnds > 9) {
        seconds.innerText = secnds;
    }
    if (secnds > 59){
        mins++
        minutes.innerText = "0" + mins
        secnds = 0;
        seconds.innerText = "0" + secnds;
    }
    if (mins > 9) {
        minutes.innerText = mins
    }
}

btnStart.addEventListener("click", function(){
    interval = setInterval(timer, 10);
    btnStart.disabled = true;
})

btnStop.addEventListener("click", function(){
    clearInterval(interval);
    btnStart.disabled = false;
})