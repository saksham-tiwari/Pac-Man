let pacman = document.querySelector('#pacman');
let pacman_Animation = ['url(img/Pacman-1.png)', 'url(img/Pacman-2.png)', 'url(img/Pacman-3.png)']
let leftPos = 506;
var topPos = 370;
let i=1;
var speed = 6;
let b=false;

let horizontalBoundary = document.querySelectorAll('.horizontal-line');
let verticalBoundary = document.querySelectorAll('.vertical-line');

console.log(horizontalBoundary[1].offsetTop);

setInterval(PacManAnimation, 115);
function PacManAnimation()
{
    i++;
    if(i==3)
        i=0;
    pacman.style.backgroundImage = pacman_Animation[i];    
}

window.addEventListener("keypress", function(event){
    console.log(topPos);
    if(event.key === "d")
    {
        if(leftPos > parseInt(verticalBoundary[1].offsetLeft)-40)
        {
            pacman.style.transform = "rotate(0deg)";
            leftPos = leftPos + speed;
            pacman.style.left = leftPos + "px";
        }
    }
    if(event.key === "a")
    {
        if(leftPos < parseInt(verticalBoundary[0].offsetLeft)+40)
        {
            pacman.style.transform = "rotate(180deg)";
            leftPos = leftPos - speed;
            pacman.style.left = leftPos + "px";
        }
    }
    if(event.key === "w")
    {
        if(topPos > parseInt(horizontalBoundary[0].offsetTop)+30)
        {
            pacman.style.transform = "rotate(-90deg)";
            topPos = topPos - speed;
            pacman.style.top = topPos + "px";
        }
    }
    if(event.key === "s")
    {
        if(topPos < parseInt(horizontalBoundary[1].offsetTop)-60)
        {
            pacman.style.transform = "rotate(90deg)";
            topPos = topPos + speed;
            pacman.style.top = topPos + "px";
        }
    }
});

