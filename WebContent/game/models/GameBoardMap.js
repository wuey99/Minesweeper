//------------------------------------------------------------------------------------------
function GameBoardMap(config) {
	this.boardRows = App.boardRows;
	this.boardColumns = App.boardColumns;
	this.difficulty = App.boardDifficulty;
	this.editingMode = config.editing;
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
GameBoardMap.prototype.uncoverEntireMap = function() {	
	for (var row=0; row < this.boardRows; row++) {
		for (var col=0; col < this.boardColumns; col++) {
			var tile = this.data[row][col];
			tile.uncover();
		}
	}	
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.toggleFlagged = function(row, col) {
	var tile = this.data[row][col];
	
	if (tile.isFlagged()) {
		tile.unmarkFlagged();
	}
	else {
		tile.markAsFlagged();
	}
		
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.getTile = function(row, col) {
	return this.data[row][col];
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.getTileValue = function(row, col) {
	return this.data[row][col].getValue();
}

//------------------------------------------------------------------------------------------
GameBoardMap.prototype.traverseBoard = function(depth, row, col) {
	var tile = this.data[row][col];
	
	if (tile.getValue() == GameBoardTile.BOMB) {
		return;
	}
	
	if (tile.isFlagged()) {
		return;
	}
	
	if (!tile.isCovered()) {
		return;
	}
	
	var tileUL = null, tileUP = null, tileUR = null;
	var tileLF = null, tileRT = null;
	var tileLL = null, tileDN = null, tileLR = null;
	
	var bombCount = 0;
	
	console.log(": depth: ", depth);
	
// ul
	if (row - 1 >= 0 && col - 1 >= 0) {
		tileUL = this.data[row-1][col-1];
		
		if (tileUL.getValue() == GameBoardTile.BOMB) {
			bombCount++;
		}
	}
// up
	if (row - 1 >= 0) {
		tileUP = this.data[row-1][col];	
		
		if (tileUP.getValue() == GameBoardTile.BOMB) {
			bombCount++;
		}
	}
// ur
	if (row - 1 >= 0 && col + 1 < this.boardColumns) {
		tileUR = this.data[row-1][col+1];	
	
		if (tileUR.getValue() == GameBoardTile.BOMB) {
			bombCount++;
		}
	}
// lf
	if (col - 1 >= 0) {
		tileLF = this.data[row][col-1];		
		
		if (tileLF.getValue() == GameBoardTile.BOMB) {
			bombCount++;
		}
	}
// rt
	if (col + 1 < this.boardColumns) {
		tileRT = this.data[row][col+1];		
		
		if (tileRT.getValue() == GameBoardTile.BOMB) {
			bombCount++;
		}
	}
// ll
	if (row + 1 < this.boardRows && col - 1 >= 0) {
		tileLL = this.data[row+1][col-1];	
		
		if (tileLL.getValue() == GameBoardTile.BOMB) {
			bombCount++;
		}
	}
// dn
	if (row + 1 < this.boardRows) {
		tileDN = this.data[row+1][col];		
		
		if (tileDN.getValue() == GameBoardTile.BOMB) {
			bombCount++;
		}
	}
// lr
	if (row + 1 < this.boardRows && col + 1 < this.boardColumns) {
		tileLR = this.data[row+1][col+1];		
		
		if (tileLR.getValue() == GameBoardTile.BOMB) {
			bombCount++;
		}
	}
	
	switch (bombCount) {
		case 0:
			tile.uncover();
			break;
		case 1:
			tile.setValueAndUncover(GameBoardTile._1);
			break;
		case 2:
			tile.setValueAndUncover(GameBoardTile._2);
			break;
		case 3:
			tile.setValueAndUncover(GameBoardTile._3);
			break;
		case 4:
			tile.setValueAndUncover(GameBoardTile._4);
			break;
		case 5:
			tile.setValueAndUncover(GameBoardTile._5);
			break;
		case 6:
			tile.setValueAndUncover(GameBoardTile._6);
			break;
	}
	
	if (bombCount > 0) {
		return;
	}
	
	depth++;
	
	if (tileUL) {
		this.traverseBoard(depth, row-1, col-1);
	}
	if (tileUP) {
		this.traverseBoard(depth, row-1, col);
	}
	if (tileUR) {
		this.traverseBoard(depth, row-1, col+1);
	}
	if (tileLF) {
		this.traverseBoard(depth, row, col-1);
	}
	if (tileRT) {
		this.traverseBoard(depth, row, col+1);
	}
	if (tileLL) {
		this.traverseBoard(depth, row+1, col-1);
	}
	if (tileDN) {
		this.traverseBoard(depth, row+1, col);
	}
	if (tileLR) {
		this.traverseBoard(depth, row+1, col+1);
	}
	
	return;
	
	console.log(": traverse board: ", row, col);
	console.log(": top: ", tileUL, tileUP, tileUR);
	console.log(": mid: ", tileLF, "xxx", tileRT);
	console.log(": down: ", tileLL, tileDN, tileLR);
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