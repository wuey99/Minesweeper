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
	this.data = new Array(this.boardRows);
	
	for (var row=0; row < this.boardRows; row++) {
		this.data[row] = new Array(this.boardColumns);
		
		for (var col=0; col < this.boardColumns; col++) {
			this.data[row][col] = new GameBoardTile();
			this.data[row][col].setup();
		}
	}	
	
	for (i=0; i < this.difficulty; i++) {
		var row = Math.floor(Math.random() * this.boardRows);
		var col = Math.floor(Math.random() * this.boardColumns);

		var tile = this.data[row][col];
		
		tile.markAsBomb();
	}
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.update = function() {	
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.importLevel = function() {
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.exportLevel = function() {
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.info = function() {
}