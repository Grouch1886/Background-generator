var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("enter");


// Display the colour inputs match the background generated on the first page load. 
color1.setAttribute("value", "#ff0000");
color2.setAttribute("value", "#FFFF00");

// Display the initial CSS linear gradient property on page load.
var cssGradientProperty = window.getComputedStyle(body).getPropertyValue("background-image");
css.textContent = cssGradientProperty;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


function randomColor() {
	var hex = "#" + Math.floor(Math.random()*16777215).toString(16);
	return hex
}

function generateRandomColor() {
	color1.value = randomColor();
	color2.value = randomColor();

	setGradient();
}

button.addEventListener("click", generateRandomColor)







/*function newGradient(evt) {
	var button = Math.floor(Math.random()*16777215).toString(16);	
	var randomColor2  = Math.floor(Math.random()*16777215).toString(16);	
 	body.style.backgroundColor = "#" + button;
	color.innerHTML = "#" + button;
}

button.addEventListener("click", newGradient)*/

/*button.addEventListener("click", setBg);
setBg();*/

