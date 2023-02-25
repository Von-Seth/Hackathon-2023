var dice = document.querySelector(".dice")


dice.addEventListener("click", () => {
    game()
    updateRound()
})

function game() {
    let num = generateNum(1, 6)
    rollDice(num)
}

function gameStart() {
    choosechr.parentElement.style.display = "none"
    title.style.visibility = "visible"
    updatePlayer(players[s].name)
    writeInfo()
    placeInfo()
    person = players[0]
}

function updatePlayer(name) {
    title.innerHTML = name
    title.style.background = colorScheme[name]
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

function updateRound() {
    let num = +document.querySelector('.process span b').innerHTML + 1
    document.querySelector('.process span b').innerHTML = num
}