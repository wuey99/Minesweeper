//------------------------------------------------------------------------------------------
function GameEditingController() {
}

//------------------------------------------------------------------------------------------
GameEditingController.prototype.setup = function(container, parentController, data) {
	this.gameContainer = container;
	this.parentController = parentController;
	
	console.log(": data: ", data);
	
	this.gameBoardMap = new GameBoardMap({editing: true});
	this.gameBoardMap.setup(data);
	
	this.gameBoardView = new GameBoardMapView();
	this.gameBoardView.setup(this.gameBoardMap, this.gameContainer);
	
	scale = (576/App.boardColumns)/GameBoardTile.WIDTH;
	
	this.gameBoardView.scale.x = scale;
	this.gameBoardView.scale.y = scale;
	
	this.gameBoardView.addLeftMouseClickListener(function(point, row, col) {
		this.handleLeftMouseClick(point, row, col);
	}.bind(this));
	
	this.gameBoardView.addRightMouseClickListener(function(point, row, col) {
		this.handleRightMouseClick(point, row. col);
	}.bind(this));
	
	this.createSprites();
}

//------------------------------------------------------------------------------------------
GameEditingController.prototype.cleanup = function() {
	this.gameContainer.removeChild(this.gameBoardView);
	this.gameContainer.removeChild(this.quitGameButton);
	this.gameContainer.removeChild(this.loadGameText);
	this.gameContainer.removeChild(this.saveGameText);
	this.gameContainer.removeChild(this.helpText);
}

//------------------------------------------------------------------------------------------
GameEditingController.prototype.createSprites = function() {
	var style = new PIXI.TextStyle({
	    fontFamily: 'Courier New',
	    fontSize: 36,
	    fontWeight: 'bold',
	    fill: ['#0000ee', '#0000c0'],
	    wordWrap: true,
	    wordWrapWidth: App.stageWidth*9/10,
	    align: 'center'
	});

	this.helpText = new PIXI.Text("left-click to toggle mines on/off", style);
	this.helpText.x = 32;
	this.helpText.y = 32;
	this.gameContainer.addChild(this.helpText);
	
	this.quitGameButton = new PIXI.Text("Quit Editing", style);
	this.quitGameButton.x = 32;
	this.quitGameButton.y = 720;
	this.gameContainer.addChild(this.quitGameButton);
	this.quitGameButton.interactive = true;
	this.quitGameButton.on("click", function() {
		console.log(": quit: ");
		
		this.parentController.launchLoadingScreen();
	}.bind(this));
	
	this.loadGameText = new PIXI.Text("Load", style);
	this.loadGameText.x = 400;
	this.loadGameText.y = 720;
	this.gameContainer.addChild(this.loadGameText);
	this.loadGameText.interactive = true;
	this.loadGameText.on("click", function() {
		document.querySelector('.inputFile').click();	
		var input = document.querySelector('.inputFile');
		var me = this;
		input.onchange = function() {
			console.log(": changed: ", this.files[0]);
			me.readSingleFile(this);
		};
		console.log(": input: ", input);
	}.bind(this));
	
	this.saveGameText = new PIXI.Text("Save", style);
	this.saveGameText.x = 600;
	this.saveGameText.y = 720;
	this.gameContainer.addChild(this.saveGameText);
	this.saveGameText.interactive = true;
	this.saveGameText.on("click", function() {
		var save = document.querySelector('.btnSave');
		console.log(": ", save.download);
		var data = 'data:application/text;charset=utf-8,' + encodeURIComponent(this.exportLevel());
		save.href = data;
		save.download = "level.dat";
		document.querySelector('.btnSave').click();	
	}.bind(this));
}

//------------------------------------------------------------------------------------------
GameEditingController.prototype.readSingleFile = function(that) {
	var file = that.files[0];
	
	if (!file) {
		return;
	}
	
	var reader = new FileReader();
	
	reader.onload = function(e) {
		var contents = e.target.result;
		console.log(": contents: ", contents);
		
		var json = JSON.parse(contents);
		
		console.log(": json: ", json)
		
		this.parentController.launchEditingScreen(json);
	}.bind(this);
	
	reader.readAsText(file);
}

//------------------------------------------------------------------------------------------
GameEditingController.prototype.exportLevel = function() {
	return this.gameBoardMap.exportLevel();
}

//------------------------------------------------------------------------------------------
GameEditingController.prototype.handleLeftMouseClick = function(point, row, col) {
	var tile = this.gameBoardMap.getTile(row, col);
	
	if (tile.getValue() == GameBoardTile.EMPTY) {
		tile.setValue(GameBoardTile.BOMB);
	} else if (tile.getValue() == GameBoardTile.BOMB) {
		tile.setValue(GameBoardTile.EMPTY);
	}
	
	this.gameBoardView.updateFromModel();
}

//------------------------------------------------------------------------------------------
GameEditingController.prototype.handleRightMouseClick = function(point, row, col) {
}

//------------------------------------------------------------------------------------------
GameEditingController.prototype.gameLoop = function() {
}