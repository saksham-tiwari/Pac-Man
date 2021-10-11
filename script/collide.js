setTimeout(()=>{
    setInterval(()=>{
        let div1 = document.getElementById('pacman').getBoundingClientRect();
        let div2 = document.querySelector(".blinky").getBoundingClientRect();
        let div3 = document.querySelector(".inky").getBoundingClientRect();
        let div4 = document.querySelector(".pinky").getBoundingClientRect();
        let div5 = document.querySelector(".clyde").getBoundingClientRect();

        if(collide(div1,div2)){
            alert("game over");
            alert = function(){};
            location.reload();
        } else if(collide(div1,div3)){
            alert("game over");
            alert = function(){};
            location.reload();
        } else if(collide(div1,div4)){
            alert("game over");
            alert = function(){};
            location.reload();
        } else if(collide(div1,div5)){
            alert("game over");
            alert = function(){};
            location.reload();
        }
},10)
},20);



function collide(div1,div2){
let div1Top = div1.top;
let div1Left = div1.left;
let div1Right = div1.right
let div1Bottom = div1.bottom

let div2Top = div2.top;
let div2Left = div2.left;
let div2Right = div2.right
let div2Bottom = div2.bottom

let verticalMatch;
let horizontalMatch,intersect;

    if ((div2Top > div1Top && div2Top < div1Bottom)||(div2Bottom > div1Top && div2Bottom < div1Bottom)) {
    verticalMatch = true
    } else{
    verticalMatch = false
    }

    if ((div2Right > div1Left && div2Right < div1Right)||(div2Left < div1Right && div2Left > div1Left)) {
    horizontalMatch = true
    } else {
    horizontalMatch = false
    }

    if (horizontalMatch && verticalMatch){
    intersect = true
    } else {
    intersect = false
    }
return intersect;
}
