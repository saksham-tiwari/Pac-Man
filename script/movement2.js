var count =0;
var speed = 5;
let leftPos = pacman.offsetLeft;
var topPos = pacman.offsetTop;
var horiCollision = false;
var veriCollision = false;

let horizontalBoundary = document.querySelectorAll('.horizontal-line');
let verticalBoundary = document.querySelectorAll('.vertical-line');
window.addEventListener("keydown", function(event){
        checkHoriCollision();
        checkVeriCollision();
        if(event.key == "d")
        {
            
            if(veriCollision===false){
                leftPos = leftPos + speed;
                pacman.style.left = leftPos + "px";
            } 
        }
        else if(event.key == "s")
        {
            if(horiCollision===false){
                topPos = topPos + speed;
                pacman.style.top = topPos + "px";
            }
        }
        else if(event.key == "a")
        {
            if(veriCollision===false){
                leftPos = leftPos - speed;
                pacman.style.left = leftPos + "px";
            }
        }
        else if(event.key == "w")
        {
            if(horiCollision===false){
                topPos = topPos - speed;
                pacman.style.top = topPos + "px";
            }
        }
})


function checkHoriCollision(){
    var horLen = horizontalBoundary.length;
    var verLen = verticalBoundary.length;
    console.log(horLen,verLen);
    let div1 = document.getElementById('pacman').getBoundingClientRect();

    for(let a = 0;a<horLen;a++){
        let div2 = horizontalBoundary[a].getBoundingClientRect();
        if(collide(div1,div2)){
            horiCollision = true;
            break;
        }
        else{
            horiCollision=false;
        }
    }
    
}
function checkVeriCollision(){
    var horLen = horizontalBoundary.length;
    var verLen = verticalBoundary.length;
    console.log(horLen,verLen);
    let div1 = document.getElementById('pacman').getBoundingClientRect();

    for(let a = 0;a<verLen;a++){
        let div2 = verticalBoundary[a].getBoundingClientRect();
        if(collide(div1,div2)){
            veriCollision = true;
            break;
        }
        else{
            veriCollision=false;
        }
    }
}
