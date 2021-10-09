var pacman = document.querySelector('#pacman');
var wall = document.querySelector('.verti-1');
let pacman_Animation = ['url(img/Pacman-1.png)', 'url(img/Pacman-2.png)', 'url(img/Pacman-3.png)']
let leftPos = 430;
var topPos = 350;
let i=1;
var speed = 6;


setInterval(PacManAnimation, 115);
function PacManAnimation()
{
    i++;
    if(i==3)
        i=0;
    pacman.style.backgroundImage = pacman_Animation[i];    
}

window.addEventListener("keypress", function(event){
    if(event.key === "d")
    {
        if(parseInt(pacman.style.left) >= 900)
        {
            leftPos = -20;
        }
        pacman.style.transform = "rotate(0deg)";
        leftPos = leftPos + speed;
        pacman.style.left = leftPos + "px";
    }
    if(event.key === "a")
    {
        if(parseInt(pacman.style.left) < -20)
        {
            leftPos = 900;
        }
        pacman.style.transform = "rotate(180deg)";
        leftPos = leftPos - speed;
        pacman.style.left = leftPos + "px";
    }
    if(event.key === "w")
    {
        if(parseInt(pacman.style.top) < -15)
        {
            topPos = 580;
        }
        pacman.style.transform = "rotate(-90deg)";
        topPos = topPos - speed;
        pacman.style.top = topPos + "px";
    }
    if(event.key === "s")
    {
        if(parseInt(pacman.style.top) >= 590)
        {
            topPos = -20;
        }
        console.log(pacman.style.top);
        pacman.style.transform = "rotate(90deg)";
        topPos = topPos + speed;
        pacman.style.top = topPos + "px";
    }
    
});