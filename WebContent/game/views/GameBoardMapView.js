//------------------------------------------------------------------------------------------
function GameBoardMapView() {
	PIXI.Container.call(this);

	this.stage = App.stage;
	
	this.tileMap = new Dict();
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
			sprite.setup(map, row, col);
			
			this.addChild(sprite);
			
			sprite.x = col * GameBoardTile.WIDTH;
			sprite.y = row * GameBoardTile.HEIGHT;
			
			this.tileMap.set(this.rowAndColToId(row, col), sprite);
		}
	}
	
	this.gameContainer.addChild(this);
	
	this.updateFromModel();
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.cleanup = function() {
	this.tileMap.forEach(function(key) {
		
		var sprite = this.tileMap.get(key);
		this.removeChild(sprite);
		
	}.bind(this));
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.rowAndColToId = function(row, col) {
	return "" + row*100+col;
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.updateFromModel = function() {
	this.tileMap.forEach(function(key) {
		
		var sprite = this.tileMap.get(key);
		sprite.gotoAndStop(4);
		
	}.bind(this));
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.info = function() {
}