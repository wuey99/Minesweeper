//------------------------------------------------------------------------------------------
function GameBoardMap() {
	this.boardRows = App.boardRows;
	this.boardColumns = App.boardColumns;
	this.difficulty = App.boardDifficulty;
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.setup = function() {
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.generateRandom = function() {
	this.map = new Array(this.boardRows);
	
	for (var row=0; row < this.boardRows; row++) {
		this.map[row] = new Array(this.boardColumns);
		
		for (var col=0; col < this.boardColumns; col++) {
			this.map[row][col] = new GameBoardTile();
			this.map[row][col].setup();
		}
	}	
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.update = function() {	
}

//------------------------------------------------------------------------------------------
GameBoardMap.protype.import = function() {
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.export = function() {
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.info = function() {
}