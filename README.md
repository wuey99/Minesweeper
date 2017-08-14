"# Minesweeper" 

playable build can be found at:

http://www.kablooey.com:8080/Minesweeper/

haven't tested mobile yet.  appears to work on chrome and firefox.

directory structure

+ game

	+ controllers (mostly represents my game state manager)
	
		GameController.js // base controller
		
		GameEditingController.js // editing screen
		
		GameLoadingController.js // was originally the loading screen, now the main screeen
		
		GameOverController.js // not used. 
		
		GamePlayingController.js // main game play screen
		
	+ misc
	
		Explosion.js  // sprite for lose game situatiion
		
		GameCursor.js // sprite for main menu
		
	+ models
	
		GameBoardMap.js // represents the game board map
		
		GameBoardTile.js // represents a game board tile
		
	+ views
		GameBoardMapView.js // holds the board game map.  not currently optimized, just a 1:1 		mapping of the board game map data.
		
		GameBoardTileView.js // represents a single tile sprite
		
		GameContainer.js // main container for all game sprites
		
	App.js // main entry point for the app. sets up pixi view render, preloads assets.

	+ lib
	
		Dict.js // helper library that provides something AS3 dictionary support
		
		FileSaver.js // not used (attempted to support native file saving but gave up)
		
		Signal.js // helper libary that implements observer pattern
		
	index.jsp // main index file.  .jsp file because the server i use is tomcat-based
	
	
known or possible bugs:

1) end game explosion not working propery for difficulties >= medium
2) traversal code may be buggy.
3) end game feedback of where flags are placed not user-friendly.  I may look into addressing this later today.  might add a awy to toggle the flags on/off in the end-game state.

