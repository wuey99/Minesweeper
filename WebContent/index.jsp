<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Minesweeper</title>
</head>
	<script src="lib/pixi.min.js"></script>
	
	<body>
		<script>
			//Create the renderer
			var renderer = PIXI.autoDetectRenderer(256, 256);
	
			//Add the canvas to the HTML document
			document.body.appendChild(renderer.view);
	
			//Create a container object called the `stage`
			var stage = new PIXI.Container();
	
			//Tell the `renderer` to `render` the `stage`
			renderer.render(stage);
		</script>
	</body>
</html>