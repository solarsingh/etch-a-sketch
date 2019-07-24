const container = document.querySelector('#container');

canvasWidth= 450;
canvasHeight= 450;
squarePerSide= 10;

randomize= 0;

function layout(squarePerSide){    
    squareSide=canvasWidth/squarePerSide;

    container.style.gridTemplateColumns= `repeat(${squarePerSide}, ${squareSide}px)`;
    container.style.gridTemplateRows= `repeat(${squarePerSide}, ${squareSide}px)`;
}

function createCanvas(squarePerSide){
    for (i=0; i<(squarePerSide*squarePerSide); i++){
        square = document.createElement('div');
        square.classList.add('content');

        square.addEventListener('mouseover', function(e) {
            if(randomize==0){
                changeColor(e.target);
            }
            else if(randomize==1){
                randomColor(e.target);
            }
        });
    
        container.appendChild(square);
    }
}

let resetBtn = document.querySelector('#reset');
    resetBtn.addEventListener('click', () => { 
    reset();
});

let resizeBtn = document.querySelector('#resize');
    resizeBtn.addEventListener('click', () => {
    var cells= prompt("Please enter desired number of Pixels per side(10-100):", "10");

    do {
        if(cells>=10 && cells<=100){
            resize(cells);
        }
        else{
            cells= prompt("Please enter valid integer between 10 and 100 number of Pixels per side", "10");
            resize(cells);
        }
    }while ((cells<=10 || cells>=100));
});

let randomBtn = document.querySelector('#random');
    randomBtn.addEventListener('click', () => { 
    randomize=1;
    createCanvas(squarePerSide);
});

let blackBtn = document.querySelector('#black');
    blackBtn.addEventListener('click', () => { 
    randomize=0;
    createCanvas(squarePerSide);
});

function resize(cells){
    if(cells>=10 && cells<=100){
        reset();
        layout(cells);
        createCanvas(cells); 
    }
}

function reset(){
    const cell = document.querySelectorAll(".content");
    cell.forEach(cell=>cell.style.backgroundColor="white"); 
}

function changeColor(target){    
    target.style.backgroundColor=`rgb(0,0,0)`;
}

function randomColor(target){
    var min=1; 
    var max=256;  
    var red =Math.floor(Math.random() * (+max - +min)) + +min;
    var green =Math.floor(Math.random() * (+max - +min)) + +min;
    var blue =Math.floor(Math.random() * (+max - +min)) + +min; 

    target.style.backgroundColor=`rgb(${red},${green},${blue})`;
}

layout(squarePerSide);
createCanvas(squarePerSide);