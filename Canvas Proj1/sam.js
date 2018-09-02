var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//for pattern
var count = Math.round(innerWidth/5);
var colors = ['#fde132', '#009bde', '#ff6b00'];
class Pattern {
	constructor() {
		this.x = Math.random()*innerWidth;
		this.y = Math.random()*innerHeight-600;
		this.rotation = Math.random()*360;
		//for size
		var s = Math.random()*innerWidth/60;
		this.size = s<15? 15 : s;
		this.color = colors[Math.floor(Math.random()*3)];
		this.speed = this.size/7;
		this.opacity = Math.random();
		this.shift = Math.random()>0.5?1:-1;
	}
	draw() {
		c.beginPath();
		c.arc(this.x, this.y, this.size, this.rotation, this.rotation+(Math.PI/2));
		c.globalAlpha = this.opacity;
		c.fillStyle = this.color;
		c.lineTo(this.x, this.y);
		c.closePath();
		c.fill();
	}
	update() {
		this.y += this.speed;
		if(this.y <= innerHeight) {
			this.x += this.shift/6;
			this.rotation += this.shift*this.speed/100;
		}
		else 
			this.y = innerHeight;
	}
}

var arr = new Array(count);
for(var i=0; i<count; i++)
	arr[i] = new Pattern();

function animation() {
	requestAnimationFrame(animation);
	c.clearRect(0, 0, innerWidth, innerHeight);
	arr.forEach((pat) => {
		pat.draw();
		pat.update();
	})	
}
	
animation()
console.log(count)