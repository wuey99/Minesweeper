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
		console.log(": left mouse click: ", point, row, col);
	});
	
	this.gameBoardView.addRightMouseClickListener(function(point, row, col) {
		console.log(": right mouse click: ", point, row, col);
	});
}

//------------------------------------------------------------------------------------------
GamePlayingController.prototype.cleanup = function() {
}

//------------------------------------------------------------------------------------------
GamePlayingController.prototype.gameLoop = function() {
}