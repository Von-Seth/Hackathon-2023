var canvas = $('.board_canvas'); // select the canvas element
var tile;
var tID = 0;
var tileList = [];
var tileWidth = 100;
var tileHeight = 100;
var numRows = 5;
var numCols = 10;

function drawCanvas(canvas_width, canvas_height) {
    canvas.attr('width', canvas_width);
    canvas.attr('height', canvas_height);
}
function drawBoard(tileWidth, tileHeight, numRows, numCols) {
    var ctx = canvas[0].getContext('2d'); // get the canvas context
    for (var row = 0; row < numRows; row++) {
        for (var col = 0; col < numCols; col++) {
            // calculate the x and y coordinates of the tile
            var x = col * tileWidth;
            var y = row * tileHeight;
            if (row == 0 || row == numRows-1) {
                tile = new Tile(tID++, x, y, tileWidth, tileHeight);
                tileList.push(tile);
                // set the fill style of the tile
                ctx.fillStyle = 'rgba(224, 224, 224)'; 
                // draw the tile
                ctx.strokeStyle = 'blue';
                ctx.fillRect(x, y, tileWidth, tileHeight);
                ctx.strokeRect(x, y, tileWidth, tileHeight); // draw a blue stroked rectangle
            } else {
                if (col == 0 || col == numCols-1) {
                    tile = new Tile(tID++, x, y, tileWidth, tileHeight);
                    tileList.push(tile);
                    // set the fill style of the tile
                    ctx.fillStyle = 'rgba(224, 224, 224)'; 
                    // draw the tile
                    ctx.strokeStyle = 'blue';
                    ctx.fillRect(x, y, tileWidth, tileHeight);
                    ctx.strokeRect(x, y, tileWidth, tileHeight); // draw a blue stroked rectangle
                }
            }
        }
    }
}
drawCanvas(1000, 500);// canvas_width, canvas_height
drawBoard(tileWidth, tileHeight, numRows, numCols);// tileWidth, tileHeight, numRows, numCols
console.log(tileList);

canvas.click(function(e) {
    // Get x and y coordinates of click
    var mouseX = e.clientX - canvas[0].offsetLeft;
    var mouseY = e.clientY - canvas[0].offsetTop;
    // Check if click is inside a shape
    console.log("mouseX: "+mouseX+" mouseY: "+mouseY);
    if (mouseX >= 0 && mouseX <= tileWidth && mouseY >= 0 && mouseY <= tileHeight) {
        //console.log("mouseX: "+mouseX+" mouseY: "+mouseY);
        // Open popup when shape is clicked
        $('#popup_container').fadeIn();
        $('.fight_scene').append('<p>click coordinates: (mouseX = '+mouseX+', mouseY = '+mouseY+')</p>');
    }
});

// Close popup when close button is clicked
$('#popup_close_btn').click(function() {
    $('#popup_container').fadeOut();
  });
