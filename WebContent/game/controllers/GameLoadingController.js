//------------------------------------------------------------------------------------------
function GameLoadingController() {
	this.delay = 0;
}

//------------------------------------------------------------------------------------------
GameLoadingController.prototype.setup = function(container, parentController) {
	this.gameContainer = container;
	this.parentController = parentController;
	
	this.spritesLoaded = false;
}

//------------------------------------------------------------------------------------------
GameLoadingController.prototype.setupSprites = function(container, parentController) {
	if (this.spritesLoaded) {
		return;
	}
	
	this.spritesLoaded = true;
	
	var style = new PIXI.TextStyle({
	    fontFamily: 'Courier New',
	    fontSize: 36,
	    fontWeight: 'bold',
	    fill: ['#0000ee', '#0000c0'],
	    wordWrap: true,
	    wordWrapWidth: App.stageWidth*3/4,
	    align: 'center'
	});
	
	this.loadingText = new PIXI.Text("Prepare to be blown up...", style);
	this.loadingText.x = 32;
	this.loadingText.y = 32;
	this.gameContainer.addChild(this.loadingText);
	
	this.easyGameText = new PIXI.Text("Easy (9x9), 10 mines.", style);
	this.easyGameText.x = 64;
	this.easyGameText.y = 128;
	this.easyGameText.interactive = true;
	this.gameContainer.addChild(this.easyGameText);
	this.easyGameText.on("click", function() {
		this.cursorSprite.y = this.easyGameText.y + 16;
		App.boardRows = 9;
		App.boardColumns = 9;
		App.boardDifficulty = 10;
	}.bind(this));
	
	this.mediumGameText = new PIXI.Text("Medium (15x15), 20 mines.", style);
	this.mediumGameText.x = 64;
	this.mediumGameText.y = 176;
	this.mediumGameText.interactive = true;
	this.gameContainer.addChild(this.mediumGameText);
	this.mediumGameText.on("click", function() {
		this.cursorSprite.y = this.mediumGameText.y + 16;	
		App.boardRows = 15;
		App.boardColumns = 15;
		App.boardDifficulty = 20;
	}.bind(this));
	
	this.hardGameText = new PIXI.Text("Hard (21x21), 30 mines.", style);
	this.hardGameText.x = 64;
	this.hardGameText.y = 224;
	this.hardGameText.interactive = true;
	this.gameContainer.addChild(this.hardGameText);
	this.hardGameText.on("click", function() {
		this.cursorSprite.y = this.hardGameText.y + 16;		
		App.boardRows = 21;
		App.boardColumns = 21;
		App.boardDifficulty = 30;
	}.bind(this));

	this.cursorSprite = new GameCursor(PIXI.loader.resources["images/Cursor00.png"].texture);
	this.gameContainer.addChild(this.cursorSprite);
	this.cursorSprite.setup(this.gameContainer, this.parentController);
	this.cursorSprite.x = 32;
	this.cursorSprite.y = this.easyGameText.y + 16;
	
	this.playGameText = new PIXI.Text("Play", style);
	this.playGameText.x = 96;
	this.playGameText.y = 320;
	this.playGameText.interactive = true;
	this.gameContainer.addChild(this.playGameText);
	this.playGameText.on("click", function() {
		this.parentController.launchPlayingScreen();		
	}.bind(this));	
	
	this.editGameText = new PIXI.Text("Edit", style);
	this.editGameText.x = 320;
	this.editGameText.y = 320;
	this.editGameText.interactive = true;
	this.gameContainer.addChild(this.editGameText);
	this.editGameText.on("click", function() {
		
	}.bind(this));	
}

//------------------------------------------------------------------------------------------
GameLoadingController.prototype.cleanup = function() {
	this.gameContainer.removeChild(this.loadingText);
	this.gameContainer.removeChild(this.easyGameText);
	this.gameContainer.removeChild(this.mediumGameText);
	this.gameContainer.removeChild(this.hardGameText);
	this.gameContainer.removeChild(this.cursorSprite);
	this.gameContainer.removeChild(this.playGameText);
	this.gameContainer.removeChild(this.editGameText);
}

//------------------------------------------------------------------------------------------
GameLoadingController.prototype.gameLoop = function() {
	this.delay++;
	
	if (this.delay > 60*2) {
//		this.parentController.launchPlayingScreen();
	}
	
	if (App.loadComplete) {
		this.setupSprites();
	}
}