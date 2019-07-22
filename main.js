const container = document.querySelector('#container');

canvasWidth=600;
canvasHeight=600;
squarePerSide=100;
squareSide=canvasWidth/squarePerSide;

container.style.gridTemplateColumns= `repeat(${squarePerSide}, ${squareSide}px)`;
container.style.gridTemplateRows= `repeat(${squarePerSide}, ${squareSide}px)`;

function createCanvas(){
    
    for (i=0; i<(squarePerSide*squarePerSide); i++){

        square = document.createElement('div');
        square.classList.add('content');
        square.addEventListener('mouseover', function(e) {
            changeColor(e.target);
        });
    
        container.appendChild(square);   
    
    }
}

let resetBtn = document.querySelector('#reset');
    resetBtn.addEventListener('click', () => { 
    reset();
});

function reset(){
    const cell = document.querySelectorAll(".content");
    console.log(cell);
    cell.forEach(cell=>cell.style.backgroundColor="violet"); 
    
}

function changeColor(target){
    
    target.style.backgroundColor="red";
    console.log('the event fired fine' );
    console.log(target)

}

var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
  output.innerHTML = this.value;
}

createCanvas();