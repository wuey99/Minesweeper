//------------------------------------------------------------------------------------------
function GameEditingController() {
}

//------------------------------------------------------------------------------------------
GameEditingController.prototype.setup = function(container, parentController) {
	this.gameContainer = container;
	this.parentController = parentController;
	
	this.gameBoardMap = new GameBoardMap({editing: true});
	this.gameBoardMap.setup();
	
	this.gameBoardView = new GameBoardMapView();
	this.gameBoardView.setup(this.gameBoardMap, this.gameContainer);
	
	scale = (576/App.boardColumns)/GameBoardTile.WIDTH;
	
	this.gameBoardView.scale.x = scale;
	this.gameBoardView.scale.y = scale;
	
	this.gameBoardView.addLeftMouseClickListener(function(point, row, col) {
		this.handleLeftMouseClick(point, row, col);
	}.bind(this));
	
	this.gameBoardView.addRightMouseClickListener(function(point, row, col) {
		this.handleRightMouseClick(point, row. col);
	}.bind(this));
	
	this.createSprites();
}

//------------------------------------------------------------------------------------------
GameEditingController.prototype.cleanup = function() {
	this.gameContainer.removeChild(this.gameBoardView);
	this.gameContainer.removeChild(this.quitGameButton);
}

//------------------------------------------------------------------------------------------
GameEditingController.prototype.createSprites = function() {
	var style = new PIXI.TextStyle({
	    fontFamily: 'Courier New',
	    fontSize: 36,
	    fontWeight: 'bold',
	    fill: ['#0000ee', '#0000c0'],
	    wordWrap: true,
	    wordWrapWidth: App.stageWidth*3/4,
	    align: 'center'
	});

	this.quitGameButton = new PIXI.Text("Quit Editing", style);
	this.quitGameButton.x = 32;
	this.quitGameButton.y = 720;
	this.gameContainer.addChild(this.quitGameButton);
	this.quitGameButton.interactive = true;
	this.quitGameButton.on("click", function() {
		console.log(": quit: ");
		
		this.parentController.launchLoadingScreen();
	}.bind(this));
	
	this.saveGameText = new PIXI.Text("Save", style);
	this.saveGameText.x = 512;
	this.saveGameText.y = 720;
	this.gameContainer.addChild(this.saveGameText);
	this.saveGameText.interactive = true;
	this.saveGameText.on("click", function() {
		var save = document.querySelector('.btnSave');
		console.log(": ", save.download);
		var data = 'data:application/text;charset=utf-8,' + encodeURIComponent(this.exportLevel());
		save.href = data;
		save.download = "level.dat";
		document.querySelector('.btnSave').click();	
	}.bind(this));
}

//------------------------------------------------------------------------------------------
GameEditingController.prototype.exportLevel = function() {
	return this.gameBoardMap.exportLevel();
}

//------------------------------------------------------------------------------------------
GameEditingController.prototype.handleLeftMouseClick = function(point, row, col) {
}

//------------------------------------------------------------------------------------------
GameEditingController.prototype.handleRightMouseClick = function(point, row, col) {
}

//------------------------------------------------------------------------------------------
GameEditingController.prototype.gameLoop = function() {
}