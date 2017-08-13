//------------------------------------------------------------------------------------------
function GameBoardTileView(id) {
	this.id = id;
	var texture = id["Tile_100.png"];
	PIXI.Sprite.call(this, texture);
	this.texture = texture;	
	this.stage = App.stage;
	this.map = null;
	this.row = 0;
	this.col = 0;
}

GameBoardTileView.EMPTY = "Tile_EMPTY00.png";
GameBoardTileView.BOMB = "Tile_BOMB00.png";
GameBoardTileView.COVERED = "Tile_COVERED00.png";
GameBoardTileView.FLAGGED = "Tile_FLAGGED00.png";
GameBoardTileView._1 = "Tile_100.png";
GameBoardTileView._2 = "Tile_200.png";
GameBoardTileView._3 = "Tile_300.png";
GameBoardTileView._4 = "Tile_400.png";
GameBoardTileView._5 = "Tile_500.png";
GameBoardTileView._6 = "Tile_600.png";

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype = Object.create(PIXI.Sprite.prototype);

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype.setup = function(map, row, col) {
	this.map = map;
	this.row = row;
	this.col = col;
}

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype.cleanup = function() {	
}

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype.gotoAndStop = function(frame) {
	this.texture = this.id[frame];
}

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype.updateFromModel = function() {
	var tile = this.map.data[this.row][this.col];
	
	var frame = GameBoardTileView.EMPTY;
	
	switch (tile.getValue()) {
		case GameBoardTile.EMPTY:
			frame = GameBoardTileView.EMPTY;
			break;
		case GameBoardTile.BOMB:
			frame = GameBoardTileView.BOMB;
			break;
		case GameBoardTile._1:
			frame = GameBoardTileView._1;
			break;
		case GameBoardTile._2:
			frame = GameBoardTileView._2;
			break;
		case GameBoardTile._3:
			frame = GameBoardTileView._3;
			break;
		case GameBoardTile._4:
			frame = GameBoardTileView._4;
			break;
		case GameBoardTile._5:
			frame = GameBoardTileView._5;
			break;
		case GameBoardTile._6:
			frame = GameBoardTileView._6;
			break;
	}

	if (tile.isCovered()) {
//		frame = GameBoardTileView.COVERED;
	}
	
	if (tile.isFlagged()) {
		frame = GameBoardTileView.FLAGGED;
	}
	
	this.gotoAndStop(frame);
}

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype.info = function() {
}