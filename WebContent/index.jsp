<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Minesweeper</title>
</head>
	<script src="lib/pixi.min.js"></script>
	<script src="lib/Dict.js"></script>	
	<script src="lib/Signal.js"></script>
	<script src="lib/FileSaver.js"></script>	
	<script src="game/misc/Explosion.js"></script>
	<script src="game/misc/GameCursor.js"></script>
	<script src="game/models/GameBoardMap.js"></script>
	<script src="game/models/GameBoardTile.js"></script>
	<script src="game/views/GameBoardMapView.js"></script>
	<script src="game/views/GameBoardTileView.js"></script>		
	<script src="game/views/GameContainer.js"></script>
	<script src="game/controllers/GameLoadingController.js"></script>
	<script src="game/controllers/GamePlayingController.js"></script>
	<script src="game/controllers/GameEditingController.js"></script>
	<script src="game/controllers/GameOverController.js"></script>
	<script src="game/controllers/GameController.js"></script>
	<script src="game/App.js"></script>
	
	<body>
		<input class="inputFile" type="file" style="display: none;"/>
		<a href="#" download="data.csv" class="btnSave" style="display: none;">Save</a>		
		<script>
			var app = new App();
			app.setup();	
			var a = '<input class="inputFile" type="file" style="display: none;"/>';						
		</script>
	</body>
</html>