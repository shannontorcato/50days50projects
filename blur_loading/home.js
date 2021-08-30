//First get elements with id='cloumn'

let elements = document.getElementsByClassName('column');

const one = document.getElementById('one');
const two = document.getElementById('two');
const four = document.getElementById('four');

var i;

one.addEventListener("click", ()=>{
    
    for (i=0; i<elements.length; i++){
        elements[i].style.flex = "100%";
    }
});

two.addEventListener("click", ()=>{
    for (i=0; i<elements.length; i++){
        elements[i].style.flex = "50%";
    }
});

four.addEventListener("click", ()=>{    
    
    for (i=0; i<elements.length; i++){
        elements[i].style.flex = "25%";
    }
});

//Highlight button when selected
let header = document.getElementById('myHeader');

let btns = header.getElementsByClassName("btn");

for (i=0; i<btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let current = document.getElementsByClassName(" active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}