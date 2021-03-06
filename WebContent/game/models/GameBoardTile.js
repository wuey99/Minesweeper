//------------------------------------------------------------------------------------------
function GameBoardTile() {
	this.currValue = 0;
	this.attribute = 0;
	
	this.setValue(GameBoardTile.EMPTY);
	this.attribute = GameBoardTile.ATTR_COVERED;
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
GameBoardTile.ATTR_FLAGGED = 0x02;

GameBoardTile.WIDTH = 64;
GameBoardTile.HEIGHT = 64;

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
GameBoardTile.prototype.markAsFlagged = function() {
	this.attribute |= GameBoardTile.ATTR_FLAGGED;;
}

//------------------------------------------------------------------------------------------
GameBoardTile.prototype.unmarkFlagged = function() {
	this.attribute &= GameBoardTile.ATTR_FLAGGED ^ 0xff;
}

//------------------------------------------------------------------------------------------
GameBoardTile.prototype.isFlagged = function() {
	return this.attribute & GameBoardTile.ATTR_FLAGGED;
}

//------------------------------------------------------------------------------------------
GameBoardTile.prototype.uncover = function() {
	this.attribute &= GameBoardTile.ATTR_COVERED ^ 0xff;
}

//------------------------------------------------------------------------------------------
GameBoardTile.prototype.isCovered = function() {
	return this.attribute & GameBoardTile.ATTR_COVERED;
}

//------------------------------------------------------------------------------------------
GameBoardTile.prototype.setValue = function(value) {
	this.currValue = value;	
}

//------------------------------------------------------------------------------------------
GameBoardTile.prototype.setValueAndUncover = function(value) {
	this.currValue = value;	
	this.attribute &= GameBoardTile.ATTR_COVERED ^ 0xff;
}

//------------------------------------------------------------------------------------------
GameBoardTile.prototype.getValue = function() {
	return this.currValue;
}

//------------------------------------------------------------------------------------------
GameBoardTile.prototype.info = function() {
}