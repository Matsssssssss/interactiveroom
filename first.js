const second = document.querySelector("[data-second]")

function setClock(){
    console.log("this is a clock")
    const currentDate = new Date()
    const seconds = currentDate.getSeconds()
    setRotation(second, seconds)
}

function setRotation(hand, rotation){
    hand.style.setProperty('--rotation', rotation)
}

setInterval(setClock, 1000)