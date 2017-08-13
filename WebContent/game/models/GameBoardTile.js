//------------------------------------------------------------------------------------------
function GameBoardTile() {
	this.setValue(GameBoardTile.EMPTY);
	this.attribute = GameboardTile.ATTR_COVERED;
}

//------------------------------------------------------------------------------------------
GameBoardTile.EMPTY = 100;
GameBoardTile.BOMB = 101;
GameBoardTile._1 = 1;
GameBoardTile._2 = 2;
GameBoardTile._3 = 3;
GameBoardTile._4 = 4;
GameBoardTile._5 = 5;
GameBoardTile._6 = 6;

GameBoardTile.ATTR_COVERED = 0x01;
GameBoardTile_ATTR_FLAGGED = 0x02;

//------------------------------------------------------------------------------------------
GameBoardTile.prototype.setup = function() {
}

//------------------------------------------------------------------------------------------
GameBoardTile.prototype.cleanup = function() {
}

//------------------------------------------------------------------------------------------
GameBoardTile.prototype.markAsBomb = function() {
	this.setValue(GameBoardTile.BOMB);
}

//------------------------------------------------------------------------------------------
GameBoardTile.prototype.setValue = function(value) {
	this.originalValue = value;
	this.currValue = value;	
}

//------------------------------------------------------------------------------------------
GameBoardTile.prototype.getValue = function() {
	return this.currValue;
}

//------------------------------------------------------------------------------------------
GameBoardTile.prototype.info = function() {
}