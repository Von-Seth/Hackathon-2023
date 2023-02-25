class Tile {
    constructor(tID, x , y, tileWidth, tileHeight) {
        this.tID = tID;
        this.x = x;
        this.y = y;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
    }

    get tID() {
        return this.tID;
    }

    get position() {
        return [this.x , this.y];
    }
}
    /*
    get tileColor() {
        return this.tColor;
    }

    set tileColor(newColor){
        this.tColor = newColor;
    }

    containPlayer(){
        let result = false;
        if(this.playerList != null){
            result = true;
        }
    }

    get playerList(){
        return this.playerList;
    }
        
    get prevTile(){
        return this.prevTile;
    }

    set prevTile(toSetPTile){
        this.prevTile = toSetPTile;
    }

    get nextTile(){
        return this.nextTile;
    }

    set nextTile(toSetNTile){
        this.nextTile = toSetNTile;
    }
}

class TileNode {
    constructor(tileID, prev, next){
        this.tileID = tileID;
        this.prev = prev;
        this.next = next;
    }
}

class TileLinkedList {
    
}
*/