var c = document.getElementById('c');
var ctx = c.getContext('2d');

var width = 600;
var height = 600;

var dots = [{x: 20, y:20, dx: 2, dy: 2}, {x: 200, y:20, dx: -1, dy: 2}, {x: 400, y:20, dx: -3, dy: 2}, {x: 600, y:20, dx: -3, dy: 2}];

function main() {
	for(i = 0; i < dots.length; i++) {
		ctx.fillStyle = "red";
		ctx.fillRect(dots[i].x, dots[i].y, 8, 8);
		dots[i].x += dots[i].dx;
		dots[i].y += dots[i].dy;
		if(dots[i].x > width || dots[i].x < 0 || dots[i].y > height || dots[i].y < 0) {
			console.log(dots[i]);
			i -= 1;
			dots.splice(i+1, 1);
		}
	}
		
}

setInterval(main, 1000/60);