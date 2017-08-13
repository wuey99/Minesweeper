//------------------------------------------------------------------------------------------
function App() {
	console.log(": App: ");
	
	App = this;
	
	this.stageWidth = 800;
	this.stageHeight = 800;
	
	this.loadComplete = false;
	
	this.boardRows = 9;
	this.boardColumns = 9;
	this.boardDifficulty = "EASY";
}

//------------------------------------------------------------------------------------------
App.prototype.setupStage = function() {
	//Create the renderer
	var renderer = PIXI.autoDetectRenderer(this.stageWidth, this.stageHeight);

	//Add the canvas to the HTML document
	document.body.appendChild(renderer.view);

	//Create a container object called the `stage`
	var stage = new PIXI.Container();
	this.stage = stage;
	
	//Tell the `renderer` to `render` the `stage`
	renderer.render(stage);
}
	
//------------------------------------------------------------------------------------------
App.prototype.loadAssets = function() {
	PIXI.loader
	  .add([
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
	  });	
}

//------------------------------------------------------------------------------------------
App.prototype.setup = function() {
	this.setupStage();
	this.loadAssets();
	
	var controller = new GameController();
	controller.setup();
}