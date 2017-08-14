//------------------------------------------------------------------------------------------
function GamePlayingController() {
}

//------------------------------------------------------------------------------------------
GamePlayingController.prototype.setup = function(container, parentController) {
	this.gameContainer = container;
	this.parentController = parentController;
	
	this.gameBoardMap = new GameBoardMap();
	this.gameBoardMap.setup();
	
	this.gameBoardView = new GameBoardMapView();
	this.gameBoardView.setup(this.gameBoardMap, this.gameContainer);
	
	this.gameBoardView.addLeftMouseClickListener(function(point, row, col) {
		this.handleLeftMouseClick(point, row, col);
	}.bind(this));
	
	this.gameBoardView.addRightMouseClickListener(function(point, row, col) {
		this.handleRightMouseClick(point, row. col);
	}.bind(this));
}

//------------------------------------------------------------------------------------------
GamePlayingController.prototype.handleLeftMouseClick = function(point, row, col) {
	console.log(": left: ", point, row, col);
	
	this.gameBoardMap.traverseBoard(0, row, col);
	this.gameBoardView.updateFromModel();
}

//------------------------------------------------------------------------------------------
GamePlayingController.prototype.handleRightMouseClick = function(point, row, col) {
	var col = Math.floor(point.x / GameBoardTile.WIDTH);
	var row = Math.floor(point.y / GameBoardTile.HEIGHT);
	
	console.log(": right: ", point, row, col);
	
	this.gameBoardMap.toggleFlagged(row, col);
	this.gameBoardView.updateFromModel();
}

//------------------------------------------------------------------------------------------
GamePlayingController.prototype.cleanup = function() {
}

//------------------------------------------------------------------------------------------
GamePlayingController.prototype.gameLoop = function() {
}