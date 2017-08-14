//------------------------------------------------------------------------------------------
function GameLoadingController() {
	this.delay = 0;
}

//------------------------------------------------------------------------------------------
GameLoadingController.prototype.setup = function(container, parentController) {
	this.gameContainer = container;
	this.parentController = parentController;
	
	var style = new PIXI.TextStyle({
	    fontFamily: 'Courier New',
	    fontSize: 36,
	    fontWeight: 'bold',
	    fill: ['#0000ee', '#0000c0'],
	    wordWrap: true,
	    wordWrapWidth: App.stageWidth*3/4,
	    align: 'center'
	});
	
	this.loadingText = new PIXI.Text("Laying the mines...", style);
	this.loadingText.x = 32;
	this.loadingText.y = 32;
	this.gameContainer.addChild(this.loadingText);
	
	console.log(": text: ", this.loadingText);
}

//------------------------------------------------------------------------------------------
GameLoadingController.prototype.cleanup = function() {
	this.gameContainer.removeChild(this.loadingText);
}

//------------------------------------------------------------------------------------------
GameLoadingController.prototype.gameLoop = function() {
	this.delay++;
	
	if (this.delay > 60*2) {
		this.parentController.launchPlayingScreen();
	}
}