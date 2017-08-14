//------------------------------------------------------------------------------------------
function Explosion(texture) {
	PIXI.Sprite.call(this, texture);
	this.texture = texture;	
	this.stage = App.stage;
	this.pivot.x = 60;
	this.pivot.y = 60;
	this.jiffies = 0;
	this.scaleValue = 1.0;
	this.alphaValue = 0.75;
}

//------------------------------------------------------------------------------------------
Explosion.prototype = Object.create(PIXI.Sprite.prototype);

//------------------------------------------------------------------------------------------
Explosion.prototype.setup = function(parentContainer, parentController) {
	this.parentContainer = parentContainer;
	this.parentController = parentController;
	
	this.parentController.addGameLoopListener(this.gameLoop.bind(this));
}

//------------------------------------------------------------------------------------------
Explosion.prototype.cleanup = function() {
	this.parentContainer.removeChild(this);
	this.parentController.removeGameLoopListener(this.gameLoop);
}

//------------------------------------------------------------------------------------------
Explosion.prototype.gameLoop = function() {
	this.jiffies++;
	
	this.scaleValue += 0.33;
	this.alphaValue = Math.max(0,0, this.alphaValue - 0.01);
	
	this.alpha = this.alphaValue;
	
	this.scale.x = this.scaleValue;
	this.scale.y = this.scaleValue;
	
//	console.log(": loop: ", this.jiffies);
	
	if (this.alphaValue <= 0.0) {
		this.cleanup();
	}
}

//------------------------------------------------------------------------------------------
Explosion.prototype.info = function() {
}