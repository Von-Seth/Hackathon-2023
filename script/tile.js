class Tile {
    constructor (tID, x , y, tileWidth, tileHeight) {
        this.tID = tID;
        this.x = x;
        this.y = y;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
    }
    /*
    constructor(tID , tPositionX , tPositionY , tColor , playerList , prevTile , nextTile){
        this.tID = tID;
        this.tPositionX = tPositionX;
        this.tPositionY = tPositionY;
        this.tColor = tColor;
        this.playerList = playerList;
        this.prevTile = prevTile;
        this.nextTile = nextTile;
    }*/

    
    get tileID(){
        return this.tID;
    }

    set tileID(newTID){
        this.tID = newTID;
    }

    get getTileX(){
        return this.x;
    }

    set setTileX(newX){
        this.x = newX;
    }

    get getTileY(){
        return this.y;
    }

    set setTileY(newY){
        this.y = newY;
    }

    get tileColor() {
        return this.tColor;
    }

    set tileColor(newColor){
        this.tColor = newColor;
    }


}
