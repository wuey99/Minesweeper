//------------------------------------------------------------------------------------------
function GameBoardMapView() {
	PIXI.Container.call(this);

	this.stage = App.stage;
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype = Object.create(PIXI.Container.prototype);

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.setup = function(map, gameContainer) {
	this.map = map;
	this.gameContainer = gameContainer;
	
	var row, col;
	
	for (row = 0; row < this.map.boardRows; row++) {
		for (col = 0; col < this.map.boardColumns; col++) {
			var sprite = new GameBoardTileView(PIXI.loader.resources["images/Sheet00.png"].texture);
			this.addChild(sprite);
			sprite.x = col * GameBoardTile.WIDTH;
			sprite.y = row * GameBoardTile.HEIGHT;
		}
	}
	
	this.gameContainer.addChild(this);
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.cleanup = function() {
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.info = function() {
}