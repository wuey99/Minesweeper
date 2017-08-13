//------------------------------------------------------------------------------------------
function GameBoardTileView(texture) {
	PIXI.Sprite.call(this, texture);
	this.texture = texture;	
	this.stage = App.stage;
	this.map = null;
	this.row = 0;
	this.col = 0;

	this.rectangle = new PIXI.Rectangle(0, 0, GameBoardTile.WIDTH, GameBoardTile.HEIGHT);
	this.texture.frame = this.rectangle;
	
	this.gotoAndStop(0);
}

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
	this.rectangle.x = frame * GameBoardTile.WIDTH;
}

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype.updateFromModel = function() {
	this.gotoAndStop(0);
}

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype.info = function() {
}