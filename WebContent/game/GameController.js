//------------------------------------------------------------------------------------------
function GameController() {
	this.gameContainer = null;
	this.jiffies = 0;
	this.gameController = null;
	this.gameControllerToCull = null;
	this.gameControllerToLaunch = null;
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
	console.log(": tick: ", this.jiffies++);
	
	if (this.gameControllerToCull) {
		this.gameControllerToCull.cleanup();
		this.gameControllerToCull = null;
	}
	
	if (this.gameControllerToLaunch) {
		this.gameControllerToLaunch();
		this.gameControllerToLaunch = null;
	}
	
	if (this.gameController) {
		this.gameController.gameLoop();
	}
	
	App.update();
}

//------------------------------------------------------------------------------------------
GameController.prototype.unloadCurrentController = function() {
	if (this.gameController) {
		this.gameControllerToCull = this.gameController;
	}
}

//------------------------------------------------------------------------------------------
GameController.prototype.launchLoadingScreen = function() {
	this.unloadCurrentController();
	
	this.gameControllerToLaunch = function() {
		this.gameController = new GameLoadingController();
		this.gameController.setup(this.gameContainer, this);
	}
}

//------------------------------------------------------------------------------------------
GameController.prototype.launchPlayingScreen = function() {
	this.unloadCurrentController();
	
	this.gameControllerToLaunch = function() {
		this.gameController = new GamePlayingController();
		this.gameController.setup(this.gameContainer, this);
	}
}