TILEWIDTH = 64

x = 0;
mapx =
	[16,16,16,16,16,16,
	 16,16,16,16,16,16,
	 16,16,16,16,16,16,
	 16,16,16,16,16,16,
	 16,16,16,16,16,16,
	 16,16,16,16,16,16]
mapy = 
	[192,0,0,0,0,0,
	 0,192,0,0,0,0,
	 0,0,192,0,0,0,
	 0,0,0,192,0,0,
	 0,0,0,0,192,0,
	 0,0,0,0,0,192]

function init() {

	ctx = $('#canvas')[0].getContext("2d");
	WIDTH = $("#canvas").width();
	HEIGHT = $("#canvas").height();
	NCOLS = mapx.length / 6;
	NROWS = mapy.length / 6;
	canvasMinX = $("#canvas").offset().left;
	canvasMaxX = canvasMinX + WIDTH
	intervalId =  setInterval(draw, 10);
	console.log(TILEWIDTH);
	console.log(NCOLS);
	console.log(NROWS);
    }

function drawBackground()
{
	row = 0;
	col = 0;
	for (i = 0;i < NCOLS;i++)
	{
		if (i >= 1)
		{
			col += 1;
		}
		//console.log(tilex);
		for (j = 0;j < NROWS;j++)
		{
			bckx = mapx[col];
			bcky = mapy[row];			
			//ctx.fillStyle = 'red';
			//ctx.fillRect(tilex + 200, 200, 10, 10);
			ctx.drawImage(document.getElementById('background'), bckx, bcky, 16, 16, TILEWIDTH * i, TILEWIDTH * j, TILEWIDTH, TILEWIDTH);
			row += 1;
		}
	}
	
}

function draw()
{
	//ctx = $('#canvas')[0].getContext("2d");
	drawBackground();
	


}