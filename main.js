var c = document.getElementById('c');
var ctx = c.getContext('2d');

var width = 600;
var height = 600;

var G = 10;
var count = 0;

var dots = [{x: 100, y:400, dx:0 , dy: 0, mass: 10}, {x: 220, y:200, dx: 0, dy: 0, mass: 10}, {x: 310, y:350, dx: 0, dy: 0, mass: 10}];

function main() {
	count++;

	if(count==30) {
		console.log("broke");
	}

	if(isNaN(dots[0].dx + (-G * (dots[1].mass)) * ((dots[0].x - dots[1].x) / ((Math.abs(dots[0].x - dots[1].x)^3))) + (-G * (dots[2].mass) * (dots[0].x - dots[2].x)) / (Math.abs(dots[0].x - dots[2].x)**3))) {
		console.log("bruh");
	}

	dots[0].dx = (-G * (dots[1].mass) * (dots[0].x - dots[1].x)) / (Math.abs(dots[0].x - dots[1].x)**3) + (-G * (dots[2].mass) * (dots[0].x - dots[2].x)) / (Math.abs(dots[0].x - dots[2].x)**3);
	dots[1].dx = (-G * (dots[2].mass) * (dots[1].x - dots[2].x)) / (Math.abs(dots[1].x - dots[2].x)**3) + (-G * (dots[0].mass) * (dots[1].x - dots[0].x)) / (Math.abs(dots[1].x - dots[0].x)**3);
	dots[2].dx = (-G * (dots[0].mass) * (dots[2].x - dots[0].x)) / (Math.abs(dots[2].x - dots[0].x)**3) + (-G * (dots[1].mass) * (dots[2].x - dots[1].x)) / (Math.abs(dots[2].x - dots[1].x)**3);

	dots[0].dy = (-G * (dots[1].mass) * (dots[0].y - dots[1].y)) / (Math.abs(dots[0].y - dots[1].y)**3) + (-G * (dots[2].mass) * (dots[0].y - dots[2].y)) / (Math.abs(dots[0].y - dots[2].y)**3);
	dots[1].dy = (-G * (dots[2].mass) * (dots[1].y - dots[2].y)) / (Math.abs(dots[1].y - dots[2].y)**3) + (-G * (dots[0].mass) * (dots[1].y - dots[0].y)) / (Math.abs(dots[1].y - dots[0].y)**3);
	dots[2].dy = (-G * (dots[0].mass) * (dots[2].y - dots[0].y)) / (Math.abs(dots[2].y - dots[0].y)**3) + (-G * (dots[1].mass) * (dots[2].y - dots[1].y)) / (Math.abs(dots[2].y - dots[1].y)**3);

	

	for(i = 0; i < dots.length; i++) {
		ctx.fillStyle = "red";
		ctx.fillRect(dots[i].x, dots[i].y, 8, 8);
		dots[i].x += dots[i].dx;
		dots[i].y += dots[i].dy;

		/*
		if(dots[i].x > width || dots[i].x < 0 || dots[i].y > height || dots[i].y < 0) {
			console.log(dots[i]);
			i -= 1;
			dots.splice(i+1, 1);
		}
		*/
	}
		
}

setInterval(main, 1000/60);
