//------------------------------------------------------------------------------------------
function App() {
	console.log(": App: ");
	
	App = this;
	
	this.stageWidth = 800;
	this.stageHeight = 800;
	
	this.loadComplete = false;
	
	this.boardRows = 9;
	this.boardColumns = 9;
	this.boardDifficulty = 10;
}

//------------------------------------------------------------------------------------------
App.prototype.setupStage = function() {
	var stage = this.stage = new PIXI.Container(),
	renderer = this.renderer = PIXI.autoDetectRenderer(this.stageWidth, this.stageHeight);
	document.body.appendChild(renderer.view);
}
	
//------------------------------------------------------------------------------------------
App.prototype.loadAssets = function() {
	PIXI.loader
	  .add([
		"images/Sheet00.png",
	    "images/Tile_100.png",
	    "images/Tile_200.png",
	    "images/Tile_300.png",
	    "images/Tile_400.png",
	    "images/Tile_500.png",
	    "images/Tile_600.png",
	    "images/Tile_BOMB00.png",
	    "images/Tile_COVERED00.png",
	    "images/Tile_EMPTY00.png",
	    "images/Tile_FLAGGED00.png",
	  ])
	  .load(function() {
		  console.log(": completed loading images: ");
		  
		  this.loadComplete = true;
	  }.bind(this));	
}

//------------------------------------------------------------------------------------------
App.prototype.update = function() {
	this.renderer.render(this.stage);
}

//------------------------------------------------------------------------------------------
App.prototype.setup = function() {
	this.setupStage();
	this.loadAssets();
	
	var controller = new GameController();
	controller.setup();
}