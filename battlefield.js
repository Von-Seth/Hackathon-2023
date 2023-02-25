var dice = document.querySelector(".dice")

dice.addEventListener("click", () => {
    game()
})

function game() {
    let num = generateNum(1, 6)
    rollDice(num)
}

function rollDice(num) {
    let bg = generateNum(1, 2)
    dice.style.background = `url(images/s${bg}.jpg)`
    setTimeout(function () {
        dice.style.background = `url(images/${num}.jpg)`
    }, 300)
}

function toggleDice(state) {
    if (state) {
        dice.style.pointerEvents = "auto"
    } else {
        dice.style.pointerEvents = "none"
    }
}

function generateNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}