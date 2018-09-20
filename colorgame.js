var numSquares = 6;
var colors = [];
var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector(".colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
  
  setupModeButtons();
   setupSquares();
   reset();
}

function setupModeButtons(){
		for(var i =0; i < modeButton.length; i++){
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

		reset();
	});
}
}

function setupSquares(){
	  for(var i = 0; i < squares.length ;i++){
	

	squares[i].addEventListener("click", function(){
	var clickedColor = this.style.backgroundColor;
    console.log(clickedColor);
	if(clickedColor === pickedColor){
		message.textContent = "Good Job!";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
		resetbutton.textContent = "Play Again"
	}
	else {
		this.style.backgroundColor = "#232323";
		message.textContent = "Try Again";

	}
	});
} 
}


function reset(){
	colors = generateColors(numSquares);
	pickedColor = pickColor();
	message.textContent = "";
	resetbutton.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    for(var i =0; i < squares.length; i++){
    	if(colors[i]){
    	squares[i].style.display = "block";	
		squares[i].style.backgroundColor = colors[i];
	}
	   else{
	   	squares[i].style.display = "none";
	   }
	}
    
   h1.style.backgroundColor = "steelblue";


}


resetbutton.addEventListener("click", function(){
	reset();

})
colorDisplay.textContent = pickedColor;


function changeColors(color) {
	for(var i =0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
	// body...
}

function pickColor(){

	return colors[Math.floor(Math.random()* colors.length)];
}

function generateColors(num){
	var arr= [];
	for(var i =0; i < num; i++){
		arr[i]= randomColor();
	}
	return arr;
}

function randomColor(){
	var r =Math.floor(Math.random()*256)
	var g =Math.floor(Math.random()*256)

	var b =Math.floor(Math.random()*256)

	return ("rgb("+r+","+" "+g+","+" "+b+")");

}