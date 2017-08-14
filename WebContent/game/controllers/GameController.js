//------------------------------------------------------------------------------------------
function GameController() {
	this.gameContainer = null;
	this.jiffies = 0;
	this.gameController = null;
	this.gameControllerToCull = null;
	this.gameControllerToLaunch = null;
	this.gameLoopSignal = new Signal();
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
	
	this.gameLoopSignal.fireSignal();
	
	App.update();
}

//-----------------------------------------------------------------------------------------
GameController.prototype.addGameLoopListener = function(listener) {
	this.gameLoopSignal.addListener(listener);
}

//-----------------------------------------------------------------------------------------
GameController.prototype.removeGameLoopListener = function(listener) {
	this.gameLoopSignal.removeListener(listener);	
}

//------------------------------------------------------------------------------------------
GameController.prototype.unloadCurrentController = function() {
	if (this.gameController) {
		this.gameControllerToCull = this.gameController;
	}
}

//------------------------------------------------------------------------------------------
GameController.prototype.launch = function(controllerClass, data) {
	this.unloadCurrentController();
	
	this.gameControllerToLaunch = function() {
		this.gameController = new controllerClass();
		this.gameController.setup(this.gameContainer, this, data);
	}
}

//------------------------------------------------------------------------------------------
GameController.prototype.launchLoadingScreen = function() {
	this.launch(GameLoadingController);
}

//------------------------------------------------------------------------------------------
GameController.prototype.launchPlayingScreen = function(data) {
	this.launch(GamePlayingController, data);
}

//------------------------------------------------------------------------------------------
GameController.prototype.launchEditingScreen = function(data) {
	this.launch(GameEditingController, data);
}