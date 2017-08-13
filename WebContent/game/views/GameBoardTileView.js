//------------------------------------------------------------------------------------------
function GameBoardTileView(texture) {
	PIXI.Sprite.call(this, texture);

	this.texture = texture;
	
	this.stage = App.stage;
	
	this.rectangle = new PIXI.Rectangle(0, 0, GameBoardTile.WIDTH, GameBoardTile.HEIGHT);
	
	this.texture.frame = this.rectangle;
	
	this.gotoAndStop(0);
}

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype = Object.create(PIXI.Sprite.prototype);

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype.setup = function() {
}

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype.cleanup = function() {	
}

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype.gotoAndStop = function(frame) {
	this.rectangle.x = frame * GameBoardTile.WIDTH;
}

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype.update = function() {
	this.gotoAndStop(0);
}

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype.info = function() {
}