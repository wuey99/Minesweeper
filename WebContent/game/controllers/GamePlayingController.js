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
	
	this.createSprites();
	
	this.gameOverFlag = false;
	this.gameWonFlag = false;
	this.gameOverCountDown = 60*5;
}

//------------------------------------------------------------------------------------------
GamePlayingController.prototype.cleanup = function() {
	this.gameContainer.removeChild(this.gameBoardView);
	this.gameContainer.removeChild(this.youWonText);
	this.gameContainer.removeChild(this.gameOverText);
	this.gameContainer.removeChild(this.showNumBombs);
	this.gameContainer.removeChild(this.quitGameButton);
}

//------------------------------------------------------------------------------------------
GamePlayingController.prototype.createSprites = function() {
	var style = new PIXI.TextStyle({
	    fontFamily: 'Courier New',
	    fontSize: 36,
	    fontWeight: 'bold',
	    fill: ['#0000ee', '#0000c0'],
	    wordWrap: true,
	    wordWrapWidth: App.stageWidth*3/4,
	    align: 'center'
	});
	
	this.youWonText = new PIXI.Text("You found all the mines!!", style);
	this.youWonText.x = 32;
	this.youWonText.y = 32;
	this.gameContainer.addChild(this.youWonText);	
	
	this.gameOverText = new PIXI.Text("You got blown up!", style);
	this.gameOverText.x = 32;
	this.gameOverText.y = 32;
	this.gameContainer.addChild(this.gameOverText);	
	
	this.showNumBombs = new PIXI.Text("There are " + this.gameBoardMap.difficulty + " mines.", style);
	this.showNumBombs.x = 32;
	this.showNumBombs.y = 32;
	this.gameContainer.addChild(this.showNumBombs);	
	
	this.youWonText.visible = false;
	this.gameOverText.visible = false;
	
	this.quitGameButton = new PIXI.Text("Quit Game", style);
	this.quitGameButton.x = 32;
	this.quitGameButton.y = 720;
	this.gameContainer.addChild(this.quitGameButton);
	this.quitGameButton.interactive = true;
	this.quitGameButton.on("click", function() {
		console.log(": quit: ");
		
		this.parentController.launchLoadingScreen();
	}.bind(this));
}

//------------------------------------------------------------------------------------------
GamePlayingController.prototype.handleLeftMouseClick = function(point, row, col) {
	if (this.gameOverFlag) {
		return;
	}
	
	console.log(": left: ", point, row, col);
	
	var tile = this.gameBoardMap.getTile(row, col);
	if (tile.getValue() == GameBoardTile.BOMB) {
		var sprite = new Explosion(PIXI.loader.resources["images/Explosion00.png"].texture);
		this.gameContainer.addChild(sprite);
		sprite.setup(this.gameContainer, this.parentController);
		sprite.x = point.x;
		sprite.y = point.y;
		
		this.gameOverFlag = true;
		this.showNumBombs.visible = false;
		this.gameOverText.visible = true;
		
		return;
	}
	
	this.gameBoardMap.traverseBoard(0, row, col);
	this.gameBoardView.updateFromModel();
}

//------------------------------------------------------------------------------------------
GamePlayingController.prototype.handleRightMouseClick = function(point, row, col) {
	if (this.gameOverFlag) {
		return;
	}
	
	var col = Math.floor(point.x / GameBoardTile.WIDTH);
	var row = Math.floor(point.y / GameBoardTile.HEIGHT);
	
	console.log(": right: ", point, row, col);
	
	var tile = this.gameBoardMap.getTile(row, col);
	if (tile.isCovered()) {
		this.gameBoardMap.toggleFlagged(row, col);
		this.gameBoardView.updateFromModel();
	}
}

//------------------------------------------------------------------------------------------
GamePlayingController.prototype.gameLoop = function() {
	if (this.gameOverFlag) {
		this.gameOverCountDown = Math.max(0, this.gameOverCountDown-1);
	}
}