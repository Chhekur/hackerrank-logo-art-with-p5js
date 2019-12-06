
start = {
	x : 300,
	y : 200
};

art = [];
artInverse = [];

displacement_factor = {
	x : -1,
	y : 0
};

displacement_bt_y = 70;
displacement_bt_x = 117;

function setup(){
	createCanvas(1050, 600);
	background(111111);
	art.push({ x : start.x, y : start.y });
	artInverse.push({ x : width - start.x - displacement_bt_x, y : height - start.y + displacement_bt_y });
	print(art);
}

function draw(){
	for(i = 0; i < art.length; i++){
		stroke('#1ba94c'); 
		strokeWeight(5);
		point(art[i].x, art[i].y);
		point(artInverse[i].x, artInverse[i].y)
		// console.log(art[i].x, art[i].y);
	}
	if(art[art.length - 1].x < 270){
		displacement_factor.x = 1;
		displacement_factor.y = -0.7;
	}
	else if(art[art.length - 1].y < 150){
		displacement_factor.x = 1;
		displacement_factor.y = 0.7;
	}
	else if(art[art.length - 1].y == 200 && art[art.length - 1].x > 392){
		displacement_factor.x = -1;
		displacement_factor.y = 0;
	}
	else if(art[art.length - 1].y == 200 && art[art.length - 1].x == 382){
		displacement_factor.x = 0;
		displacement_factor.y = 1;
	}
	else if(art[art.length - 1].y > 300 && art[art.length - 1].x < 400){
		displacement_factor.x = +1;
		displacement_factor.y = 0;
	}
	else if(art[art.length - 1].x > 550 && art[art.length - 1].x < 620 && art[art.length - 1].y > 250){
		displacement_factor.x = 0;
		displacement_factor.y = -1;
	}
	else if(art[art.length - 1].x == 551 && art[art.length - 1].y == 202){
		displacement_factor.x = 1;
		displacement_factor.y = 0;
	}
	else if(art[art.length - 1].x > 630 && art[art.length - 1].y == 202){
		displacement_factor.x = 0;
		displacement_factor.y = 1;
	}
	else if(art[art.length - 1].y > 467 && art[art.length - 1].x > 620){
		displacement_factor.x = 0;
		displacement_factor.y = 0;
	}
	if(frameCount % 0.5 == 0){
		art.push({ x : art[art.length - 1].x + displacement_factor.x, y : art[art.length - 1].y + displacement_factor.y });
		artInverse.push({ x : width - art[art.length - 1].x - displacement_bt_x, y : height - art[art.length - 1].y + displacement_bt_y });
	}
}