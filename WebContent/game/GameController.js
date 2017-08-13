//------------------------------------------------------------------------------------------
function GameController() {
	this.gameContainer = null;
	this.jiffies = 0;
	this.gameController = null;
}

//------------------------------------------------------------------------------------------
GameController.prototype.setup = function() {
	var gameContainer = this.gameContainer = new GameContainer();
	gameContainer.setup();

	var stage = App.stage;
	stage.addChild(gameContainer);
	
	gameContainer.info();	
	
	var ticker = new PIXI.ticker.Ticker();
	ticker.stop();
	
	ticker.add(function() {
		this.gameLoop();
	}.bind(this));
	
	ticker.start();
	
	console.log(": container: ", this.gameContainer);
	
	this.launchLoadingScreen();
}

//------------------------------------------------------------------------------------------
GameController.prototype.gameLoop = function() {
//	console.log(": tick: ", this.jiffies++);
	
	if (this.gameController) {
		this.gameController.gameLoop();
	}
	
	App.update();
}

//------------------------------------------------------------------------------------------
GameController.prototype.unloadCurrentController = function() {
	if (this.gameController) {
		this.gameController.cleanup();
	}
}

//------------------------------------------------------------------------------------------
GameController.prototype.launchLoadingScreen = function() {
	this.unloadCurrentController();
	
	this.gameController = new GameLoadingController();
	this.gameController.setup(this.gameContainer, this);
}

//------------------------------------------------------------------------------------------
GameController.prototype.launchPlayingScreen = function() {
	this.unloadCurrentController();
	
	this.gameController = new GamePlayingController();
	this.gameController.setup(this.gameContainer, this);
}