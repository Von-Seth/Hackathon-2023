var canvas = $('.board_canvas'); // select the canvas element
var ctx = canvas[0].getContext('2d'); // get the canvas context
var tile;
var tID = 0;
var tileList = [];
var tileWidth = 100;
var tileHeight = 100;
var numRows = 5;
var numCols = 10;
var playerImage = new Image();
var playerPosX = 0;
var playerPosY = 0;

let ifRecord = false;

function drawCanvas(canvas_width, canvas_height) {
    canvas.attr('width', canvas_width);
    canvas.attr('height', canvas_height);
    playerImage.src = 'images/knight.gif';
}

//draw all possible grid
function drawBoard(tileWidth, tileHeight, numRows, numCols) {
    for (var row = 0; row < numRows; row++) {
        for (var col = 0; col < numCols; col++) {
            // calculate the x and y coordinates of the tile
            var x = col * tileWidth;
            var y = row * tileHeight;
            if (row == 0 || row == numRows-1) {
                // set the fill style of the tile
                ctx.fillStyle = 'rgba(224, 224, 224)'; 
                // draw the tile
                ctx.strokeStyle = 'blue';
                ctx.strokeRect(x, y, tileWidth, tileHeight); // draw a blue stroked rectangle
            } else {
                if (col == 0 || col == numCols-1) {
                    // set the fill style of the tile
                    ctx.fillStyle = 'rgba(224, 224, 224)'; 
                    // draw the tile
                    ctx.strokeStyle = 'blue';
                    ctx.strokeRect(x, y, tileWidth, tileHeight); // draw a blue stroked rectangle
                }
            }
        }
    }
}

let redColor = "#ff0000";
let yellowColor = "#ffff00";
let blueColor = "#0033cc";
let greenColor = "#009900";
let tileColor = [redColor, yellowColor, blueColor, greenColor];
let tColorCounter = 0;
function assignTileID() {
    tColorCounter = 0;
    // first row
    for(var col = 0; col < numCols; col++) {
        let x = col*tileWidth;
        let y = 0;
        //draw tile
        ctx.beginPath();
        ctx.rect( x , y , tileWidth , tileHeight);
        ctx.fillStyle = tileColor[tColorCounter];
        ctx.fill();
        tile = new Tile(tID++, x, y, tileWidth, tileHeight, tileColor[tColorCounter]);
        tColorCounter++;
            if(tColorCounter == tileColor.length){
                tColorCounter = 0;
            }    
        tileList.push(tile);
    }

    //right col
    for(let row=1 ; row<numRows-1 ; row++) {
        let x = ((numCols-1)*tileWidth);
        let y = row*tileHeight;
        //draw tile
        ctx.beginPath();
        ctx.rect( x , y , tileWidth , tileHeight);
        ctx.fillStyle = tileColor[tColorCounter];
        ctx.fill();
        tile = new Tile(tID++, x, y, tileWidth, tileHeight, tileColor[tColorCounter]);
        tColorCounter++;
            if(tColorCounter == tileColor.length){
                tColorCounter = 0;
            }    
        tileList.push(tile);
    }

    //second row
    for(let col = numCols-1; col >= 0; col--){
        let x = col*tileWidth;
        let y = (numRows-1)*tileHeight;
        //draw tile
        ctx.beginPath();
        ctx.rect( x , y , tileWidth , tileHeight);
        ctx.fillStyle = tileColor[tColorCounter];
        ctx.fill();
        tile = new Tile(tID++, x, y, tileWidth, tileHeight, tileColor[tColorCounter]);
        tColorCounter++;
            if(tColorCounter == tileColor.length){
                tColorCounter = 0;
            }    
        tileList.push(tile);
    }

    //left col
    for(let row=numRows-2 ; row>=1 ; row--){
        let x = 0;
        let y = row*tileHeight;
        //draw tile
        ctx.beginPath();
        ctx.rect( x , y , tileWidth , tileHeight);
        ctx.fillStyle = tileColor[tColorCounter];
        ctx.fill();
        tile = new Tile(tID++, x, y, tileWidth, tileHeight, tileColor[tColorCounter]);
        tColorCounter++;
        if(tColorCounter == tileColor.length){
               tColorCounter = 0;
        }    
        tileList.push(tile);
    }
}

let rollDicePosX = (1.7 * tileWidth);
let rolldDcePosY = (1.5 * tileHeight);
let rollDiceWidth = 180;
let rollDiceHeight = 80;
let rollResult = '-'
function drawDice(){
    //draw dice button
    ctx.beginPath();
    ctx.rect( rollDicePosX, rolldDcePosY , rollDiceWidth , rollDiceHeight);
    ctx.fillStyle = "black";
    ctx.fill();

    //draw dice roll text
    ctx.font = "30px Arial";
    ctx.fillStyle = "white"
    ctx.fillText("Roll Dice ", (2*tileWidth), (2*tileHeight));

    //draw :
    ctx.font = "50px Arial";
    ctx.fillStyle = "black"
    ctx.fillText(":  " + rollResult, (3.7*tileWidth), (2*tileHeight));
}


drawCanvas(1000, 500);// canvas_width, canvas_height
drawBoard(tileWidth, tileHeight, numRows, numCols);// tileWidth, tileHeight, numRows, numCols
assignTileID();
drawDice();
//console.log(tileList);
 
let playposiation = 0;

let mouseX;
let mouseY;
canvas.click(function(e) {
    // Get x and y coordinates of mouse click
    mouseX = e.clientX - canvas[0].offsetLeft;
    mouseY = e.clientY - canvas[0].offsetTop;
    // Check if click is inside a shape
    console.log("mouseX: "+mouseX+" mouseY: "+mouseY);
    validGrid(mouseX , mouseY);
    drawCanvas(1000, 500);// canvas_width, canvas_height
    drawBoard(tileWidth, tileHeight, numRows, numCols);// tileWidth, tileHeight, numRows, numCols
    assignTileID();
    drawDice();
    rollResult = rollPlayerMovementDice();

    ctx.drawImage(playerImage, playerPosX, playerPosY);
});

function validGrid(mouseX , mouseY){ 
    for(let i=0 ; i<tileList.length ; i++){
        validX = ((mouseX - tileList[i].x) > 0) && ((mouseX - tileList[i].x) < tileWidth);
        validY = ((mouseY - tileList[i].y) > 0) && ((mouseY - tileList[i].y) < tileHeight);
        if(validX && validY){
            playerPosX = tileList[i].x;
            playerPosY = tileList[i].y;
            //console.log(tileColor[1]);
            if (tileList[i].color == tileColor[0]) {
                $('#popup_fight_scene_container').fadeIn();
            }
            //$('.fight_scene').append('<p>click coordinates: (mouseX = '+mouseX+', mouseY = '+mouseY+')</p>');
        }        
    }
}

function validDiceGrid(mouseX , mouseY){ 
    for(let i=0 ; i<tileList.length ; i++){
        validX = ((mouseX - tileList[i].x) > 0) && ((mouseX - tileList[i].x) < tileWidth);
        validY = ((mouseY - tileList[i].y) > 0) && ((mouseY - tileList[i].y) < tileHeight);
        if(validX && validY){
            playerPosX = tileList[i].x;
            playerPosY = tileList[i].y;
        }
    }//...not finished yet
}

function rollPlayerMovementDice(){
    let result = Math.floor(Math.random() * 6) + 1; // get random number from 1 - 6
    return result;
}


// Close popup when close button is clicked
$('#popup_close_btn').click(function() {
    $('#popup_fight_scene_container').fadeOut();
  });
