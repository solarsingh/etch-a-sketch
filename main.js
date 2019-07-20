const container = document.querySelector('#container');

for (i=0; i<2500; i++){

    square = document.createElement('div');
    square.classList.add('content');

    square.addEventListener('mouseover', function(e) {
        changeColor(e.target);
    })

    container.appendChild(square);   
    
    
}

const container2 = document.querySelector('#test');
let content1 = document.createElement('p');
content1.classList.add('content2');
content1.textContent='This is Text';
content1.addEventListener('mouseover', () => {
    console.log('the event fired fine' );
    changeColor(content1);
});
container2.appendChild(content1);
//console.log(container2);

function changeColor(target){
    
    target.style.backgroundColor="red";
    console.log('the event fired fine' );
    console.log(target)

}