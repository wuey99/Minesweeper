//------------------------------------------------------------------------------------------
function GameBoardMapView() {
	PIXI.Container.call(this);

	this.interactive = true;
	
	this.stage = App.stage;
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype = Object.create(PIXI.Container.prototype);

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.setup = function(map, gameContainer) {
	this.map = map;
	this.gameContainer = gameContainer;
	
	this.setupTileSprites();
	this.setupEvents();
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.cleanup = function() {
	this.leftMouseClickSignal.removeAllListeners();
	this.rightMouseClickSignal = removeAllListeners();
	
	this.tileMap.forEach(function(key) {
		
		var sprite = this.tileMap.get(key);
		this.removeChild(sprite);
		
	}.bind(this));
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.setupTileSprites = function() {
	this.tileMap = new Dict();
	
	var row, col;
	
	for (row = 0; row < this.map.boardRows; row++) {
		for (col = 0; col < this.map.boardColumns; col++) {
			var id = PIXI.loader.resources["images/Sheet.json"].textures;
			var sprite = new GameBoardTileView(id);
			sprite.setup(this.map, row, col);
			
			this.addChild(sprite);
			
			sprite.x = col * GameBoardTile.WIDTH;
			sprite.y = row * GameBoardTile.HEIGHT;
			
			this.tileMap.set(this.rowAndColToId(row, col), sprite);
		}
	}
	
	this.gameContainer.addChild(this);
	
	this.x = 96;
	this.y = 96;
	
	this.updateFromModel();	
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.setupEvents = function() {
	this.leftMouseClickSignal = new Signal();
	this.rightMouseClickSignal = new Signal();
	
	this.on("click", function(event) {
		event.stopPropagation();
		
		this.fireSignal(this.leftMouseClickSignal);
	}.bind(this));
	
	this.on("rightclick", function(event) {
		event.stopPropagation();
		
		this.fireSignal(this.rightMouseClickSignal);
	}.bind(this));
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.fireSignal = function(signal) {
	var point = new PIXI.Point();
	
	this.toLocal(App.getMousePos(), App.stage, point);
	
	var col = Math.floor(point.x / GameBoardTile.WIDTH);
	var row = Math.floor(point.y / GameBoardTile.HEIGHT);

	signal.fireSignal(point, row, col)
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.addLeftMouseClickListener = function(listener) {
	this.leftMouseClickSignal.addListener(listener);
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.addRightMouseClickListener = function(listener) {
	this.rightMouseClickSignal.addListener(listener);
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.rowAndColToId = function(row, col) {
	return "" + row*100+col;
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.updateFromModel = function() {
	this.tileMap.forEach(function(key) {
		
		var sprite = this.tileMap.get(key);
		sprite.updateFromModel();
		
	}.bind(this));
}

//------------------------------------------------------------------------------------------
GameBoardMapView.prototype.info = function() {
}