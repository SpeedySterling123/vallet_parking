//Create a reference for canvas 
canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d")
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_width = 75;
greencar_height =100;

//Set initial position for a car image.

function add() {
	greencar_x =5;
greencar_y = 225;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

greencar_x =5;
greencar_y = 225;
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
