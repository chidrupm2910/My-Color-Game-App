var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

easyBtn.addEventListener("click", function(){
	numSquares = 3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors=generateColors(numSquares);
	pickedColor = pickColor();
	h1.style.backgroundColor = "steelblue";
	colorDisplay.textContent = pickedColor;
	for(var i =0; i < squares.length; i ++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
})
hardBtn.addEventListener("click", function(){
	numSquares = 6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors=generateColors(numSquares);
	pickedColor = pickColor();
	h1.style.backgroundColor = "steelblue";
	colorDisplay.textContent = pickedColor;
	for(var i =0; i < squares.length; i ++){
		
			squares[i].style.backgroundColor = colors[i];
		
		
			squares[i].style.display = "block";
	}
})
