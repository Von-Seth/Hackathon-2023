class Player{
    
    constructor(hp , atk , def , evd , stars , diceRoll){
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.evd = evd;
        this.stars = stars;
        this.diceRoll = diceRoll;
    }

    printPlayer(){
        let result = "HP : " + this.hp + "\n";
        result += "ATK : " + this.atk + "\n";
        result += "DEF : " + this.def + "\n";
        result += "EVD : " + this.evd + "\n";
        result += "Stars : " + this.stars + "\n";
        result += "dice roll : " + this.diceRoll;
        return result;
    }
}

// fight logic functions
function rollDice(){
    let result = Math.floor(Math.random() * 6) + 1; // get random number from 1 - 6
    return result;
}

function damageCalculation(atk , defOrEvd , isDef){
    let resultDamage = 0;
    if(isDef == true){
        resultDamage = 1;
    }

    let damageCal = atk - defOrEvd;
    if(damageCal > 0){
        if(isDef == true){
            resultDamage += damageCal;
        }else{
            resultDamage += atk;
        }
    }
    return resultDamage;
}

function updateDamageCalculation(player , damage){
    player.hp -= damage;
}

function playerFight(player1 , player2){
    //player 1 attack first
    p1Atk = player1.atk + rollDice();

    // player 2 attack 
    p2Atk = player2.atk + rollDice();

    
}


//testing stuff
let c = new Player(5 , 1 , -1 , -1 , 10 , 0);
console.log(c.printPlayer());
console.log("----------");
updateDamageCalculation(c , 2);
console.log();
console.log(c.printPlayer());