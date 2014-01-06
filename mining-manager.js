TILEWIDTH = 64

function init() {

	ctx = $('#canvas')[0].getContext("2d");
	WIDTH = $("#canvas").width();
	HEIGHT = $("#canvas").height();
	NCOLS = WIDTH / TILEWIDTH;
	NROWS = HEIGHT / TILEWIDTH;
	canvasMinX = $("#canvas").offset().left;
	canvasMaxX = canvasMinX + WIDTH
	intervalId =  setInterval(draw, 10);
	console.log(TILEWIDTH);
	console.log(NCOLS);
	console.log(NROWS);
    }

function drawBackground()
{
	for (i = 0;i < NCOLS;i++)
	{
		//console.log(tilex);
		for (j = 0;j < NROWS;j++)
		{
			
			ctx.fillStyle = 'red';
			//ctx.fillRect(tilex + 200, 200, 10, 10);
			ctx.drawImage(document.getElementById('background'), 0, 0, 32, 32, TILEWIDTH * i, TILEWIDTH * j, TILEWIDTH, TILEWIDTH);
		}
	}
	
}

function draw()
{
	//ctx = $('#canvas')[0].getContext("2d");
	drawBackground();
	


}