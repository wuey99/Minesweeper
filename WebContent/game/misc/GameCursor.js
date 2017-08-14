//------------------------------------------------------------------------------------------
function GameCursor(texture) {
	PIXI.Sprite.call(this, texture);
	this.texture = texture;	
	this.stage = App.stage;
	this.pivot.x = 32;
	this.pivot.y = 32;
	this.rotationValue = 0;
}

//------------------------------------------------------------------------------------------
GameCursor.prototype = Object.create(PIXI.Sprite.prototype);

//------------------------------------------------------------------------------------------
GameCursor.prototype.setup = function(parentContainer, parentController) {
	this.parentContainer = parentContainer;
	this.parentController = parentController;
	
	this.parentController.addGameLoopListener(this.gameLoop.bind(this));
}

//------------------------------------------------------------------------------------------
GameCursor.prototype.cleanup = function() {
	this.parentContainer.removeChild(this);
	this.parentController.removeGameLoopListener(this.gameLoop);
}

//------------------------------------------------------------------------------------------
GameCursor.prototype.gameLoop = function() {
	this.rotationValue += 0.05;
	
	this.rotation = this.rotationValue;
}

//------------------------------------------------------------------------------------------
GameCursor.prototype.info = function() {
}