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
}

//------------------------------------------------------------------------------------------
GamePlayingController.prototype.cleanup = function() {
}

//------------------------------------------------------------------------------------------
GamePlayingController.prototype.gameLoop = function() {
}