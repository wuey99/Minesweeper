//------------------------------------------------------------------------------------------
function GameContainer() {
	PIXI.Container.call(this);

	this.stage = App.stage;
}

//------------------------------------------------------------------------------------------
GameContainer.prototype = Object.create(PIXI.Container.prototype);

//------------------------------------------------------------------------------------------
GameContainer.prototype.setup = function() {
}

//------------------------------------------------------------------------------------------
GameContainer.prototype.info = function() {
	console.log(": GameContainer:", this.stage);
}