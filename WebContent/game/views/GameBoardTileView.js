//------------------------------------------------------------------------------------------
function GameBoardTileView() {
	PIXI.Container.call(this);

	this.stage = App.stage;
}

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype = Object.create(PIXI.Container.prototype);

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype.setup = function() {
}

//------------------------------------------------------------------------------------------
GameBoardTileView.prototype.info = function() {
}