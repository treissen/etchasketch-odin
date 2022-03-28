

var pixels = 16; //original canvas pixel row and column
const canvas = document.querySelector('#sketchContainer');
const userInput = document.getElementById("quantity");
var pixel;
let mode;
let userColor = document.getElementById('userColor');

const resetButton = document.querySelector('.reset');

function createCanvas() { 
    for (i = 0; i < pixels*pixels; i++) {
        pixel = document.createElement('div');
        canvas.appendChild(pixel);
        pixel.classList.add('square');        
    }
};
createCanvas(); //call original canvas



// when user slides bar to change pixels this runs
updateCanvas = () => {
    canvas.innerHTML = "";
    canvas.style.setProperty(
      'grid-template-columns',
      `repeat(${userInput.value}, 2fr)`
    );
    canvas.style.setProperty(
      'grid-template-rows',
      `repeat(${userInput.value}, 2fr)`
    );
    for (let i = 0; i < userInput.value * userInput.value; i++) {
      const pixel = document.createElement('div');
      pixel.classList.add('square');
      canvas.appendChild(pixel);
    }
};
userInput.addEventListener("change", updateCanvas); //run function when slider bar changes

// when user clicks reset button this runs
resetButton.addEventListener("click", function() {
    canvas.innerHTML = "";
    userInput.value = "";
    canvas.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    canvas.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createCanvas();
});

const square = document.querySelector('#sketchContainer'); // only need to select container not the individual divs

//change modes functions
function eraser() {square.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = 'white';
  });
}
function rainbow() {square.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  });
}
//color picker 
let colorPicker = userColor;

colorPicker.addEventListener("change", colorPickerColor(), false);

function colorPickerColor(event) {square.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = event.target.value // right now this is set to the original value, need to look up how to change it when user changes color
  });
}
function black() {square.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = 'black';
  });
}


black(); // run this right off the bat






