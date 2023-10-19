var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var initialBackground = getComputedStyle(body).backgroundImage;
var h3 = document.getElementById("cssBackground");

// Function to set gradient background
function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

// Function to generate a random hexadecimal color
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Function to set random colors for color1 and color2
function setRandomColors() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
}

// Initial CSS background
h3.textContent = "Initial CSS Background: " + initialBackground + ";";

// Event listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Random button click event
var randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", setRandomColors);
