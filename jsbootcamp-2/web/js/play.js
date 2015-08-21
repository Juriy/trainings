
var canvas = document.getElementsByTagName('canvas')[0];
var img = new Image();
img.src = 'img/space.png';

var bullets = [
	{x: 50, y: 250},
	{x: 150, y:200}
];

var shipPos = {
	x: 0,
	y: 0
}

var ctx = canvas.getContext('2d');
canvas.addEventListener('mousemove', function(event) {
	shipPos = {
		x: event.layerX,
		y: event.layerY
	};
});

canvas.addEventListener('mousedown', function(event) {
	bullets.push({
		x: event.layerX,
		y: event.layerY
	});
});

function animate() {
	fillBackground(0, 0, 0);
	bullets.forEach(function(b) {
		drawRect(b.x, b.y);
		b.y -= 6;
	});
	drawSpaceShip(shipPos.x, shipPos.y);
	requestAnimationFrame(animate);
}
animate();

function fillBackground(r, g, b) {
	ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
	console.log(ctx.fillStyle);
	ctx.fillRect(0, 0, 700, 400);
}

function fillWithRandomColor() {
	var red = Math.floor(Math.random()*255);
	var green = Math.floor(Math.random()*255);
	var blue = Math.floor(Math.random()*255);
	fillBackground(red, green, blue);
}

function drawRect(x, y) {
	ctx.fillStyle = 'white';
	ctx.fillRect(x - 5, y - 5, 10, 10);
}

function drawSpaceShip(x, y) {
	ctx.drawImage(img, x - 100, y - 100);
}
