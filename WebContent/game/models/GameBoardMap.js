//------------------------------------------------------------------------------------------
function GameBoardMap() {
	this.boardRows = App.boardRows;
	this.boardColumns = App.boardColumns;
	this.difficulty = App.boardDifficulty;
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.setup = function() {
	this.generateRandomLevel();
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.generateRandomLevel = function() {
	this.map = new Array(this.boardRows);
	
	for (var row=0; row < this.boardRows; row++) {
		this.map[row] = new Array(this.boardColumns);
		
		for (var col=0; col < this.boardColumns; col++) {
			this.map[row][col] = new GameBoardTile();
			this.map[row][col].setup();
		}
	}	
	
	for (i=0; i < this.difficulty; i++) {
		var row = Math.floor(Math.random() * this.boardRows);
		var col = Math.floor(Math.random() * this.boardColumns);

		var tile = this.map[row][col];
		
		tile.markAsBomb();
	}
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.update = function() {	
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.import = function() {
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.export = function() {
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.info = function() {
}