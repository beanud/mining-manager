TILEWIDTH = 64

function init() {

	ctx = $('#canvas')[0].getContext("2d");
	WIDTH = $("#canvas").width();
	HEIGHT = $("#canvas").height();
	NCOLS = TILEWIDTH / WIDTH;
	NROWS = TILEWIDTH / HEIGHT;
	canvasMinX = $("#canvas").offset().left;
	canvasMaxX = canvasMinX + WIDTH
	intervalId =  setInterval(draw, 10);
	console.log(TILEWIDTH);
    }

function drawBackground()
{
	for (i = 0;i < NCOLS;i++)
	{
		tilex = TILEWIDTH * i;
		//console.log(tilex);
		for (j = 0;j < NROWS;j++)
		{
			
			tiley = TILEWIDTH * j;
			ctx.fillStyle = 'red';
			ctx.fillRect(tilex + 200, tiley + 200, 10, 10);
			ctx.drawImage(document.getElementById('background'), 0, 0, 32, 32, tilex, tiley, TILEWIDTH, TILEWIDTH);
		}
	}
	
}

function draw()
{
	//ctx = $('#canvas')[0].getContext("2d");
	drawBackground();
	


}