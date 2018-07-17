$(document).ready(function(){

	var $canvas = $('#canvas');
	var ctx = $canvas[0].getContext('2d');
	var xr = 4;
	var yr = 4;
	var speedr = 10;
	var xc = Math.floor((Math.random() * 499) + 0);
	var yc = Math.floor((Math.random() * 299) + 0);
	var key = 0;
	var randx = Math.floor((Math.random() * 499) + 0);
	var randy = Math.floor((Math.random() * 299) + 0);
	var colx = 50;
	var coly = 50;

	if(randx === xr & randy === yr){
		randx = Math.floor((Math.random() * 499) + 0);
		randy = Math.floor((Math.random() * 299) + 0);
	}
	var stalk = false;

	console.log(xc);
	drawScreen();

	function drawScreen(){
		$(document).keydown(function(e){
			key = e.which;
			// console.log(key);
		});

		$(document).keyup(function(e){
			key = 0;
		});

		moveRect();
		moveCircle();
		moveCircleRandom();

		if((xc - xr) <= (80+50)/2 && (yc - yr) <= (28+50)/2 & (xc - xr) >= -(80+50)/2 && (yc - yr) >= -(28+50)/2) {
			xr+=20;
			yr+=15;

				
		 	stalk = true;
			
			
		}
		
	
		
		

		// console.log(xc);
		//console.log(yc);


		ctx.fillStyle = "#fff";
		ctx.fillRect(0,0,500,300);

		ctx.strokeStyle = "#000";
		ctx.strokeRect(0,0,500,300);

		function moveRect() {
			if(key === 38) {
				yr-=speedr;
			} 
			if(key === 40) {
				yr+=speedr;
			} 

			if(key === 39) {
				xr+=speedr;
			} 

			if(key === 37) {
				xr-=speedr;
			} 
		}

		function moveCircle() {
			if(key === 87) {
				yc-=5;
			}
			if(key === 83) {
				yc+=5;
			} 
			if(key === 68) {
				xc+=5;
			} 

			if(key === 65) {
				xc-=5;
			} 
		}

		if(xr>=500){
			colx = xr - colx;
			if(xr != colx) {
				xr -= 5;
			}
			
		}

		if(xr<=0){
			colx = xr += colx;
			if(xr != colx){
				xr += 100;
			}
			
		}
		

		if(yr>300)
			yr -= 100;

		if(yr<0)
			yr += 100;

		if(xc>500)
			xc -= 20;

		if(xc<0)
			xc += 20;

		if(yc>300)
			yc -= 20;

		if(yc<0)
			yc += 20;

		/*xr +=1;

		*/

			

		ctx.beginPath();
		ctx.strokeStyle = "#000";
		ctx.lineWidth = 5;
		ctx.arc(xc,yc,50, (Math.PI/180) * 0, (Math.PI/180) * 360, false);
		ctx.fillStyle = "#232523";
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

		//Círculo
		ctx.beginPath();
		ctx.strokeStyle = "#20E088";
		ctx.lineWidth = 5;
		ctx.arc(xc,yc,20, (Math.PI/180) * 0, (Math.PI/180) * 360, false);
		ctx.fillStyle = "#0C6B3F";
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.strokeStyle = "#000";
		ctx.lineWidth = 5;
		ctx.arc(xc,yc,5, (Math.PI/180) * 0, (Math.PI/180) * 360, false);
		ctx.fillStyle = "#000";
		ctx.fill();
		ctx.stroke();
		ctx.closePath();


		ctx.fillStyle = "#D63B3B";
		ctx.fillRect(xr,yr,80,28);



		function stalkRect() {
			// console.log('caiu aqui');
			// console.log(stalk);
			if(xc !== xr && xc < xr){
			 	xc+=2;
			}else if(xc !== xr && xc > xr){
				xc-=2;
			}

			if(yc !== yr && yc < yr){
			 	yc+=2;
			}else if(yc !== yr && yc > yr){
				yc-=2;
			} 
		}
		
		function moveCircleRandom(){
			
			
			if(stalk) {
				stalkRect();
			} else {

				if(xc !== randx && xc < randx){
				 	xc++;
				}else if(xc !== randx && xc > randx){
					xc--;
				}  else {
					randx = Math.floor((Math.random() * 499) + 0);
				}

				if(yc !== randy && yc < randy){
				 	yc++;
				}else if(yc !== randy && yc > randy){
					yc--;
				}  else {
					randy = Math.floor((Math.random() * 299) + 0);
				}

			}
		
			



			/*if(yc <= 250) {
				if(yc !=  parseInt(Math.floor((Math.random() * 301) + (-1)))) {
					yc++;
				}
			}*/
			
			
			
		}
		
		window.requestAnimationFrame(drawScreen);
	}

	
	
});

