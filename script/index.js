var pacman = document.querySelector('#pacman');
var wall = document.querySelector('.verti-1');
let pacman_Animation = ['url(img/Pacman-1.png)', 'url(img/Pacman-2.png)', 'url(img/Pacman-3.png)']
var leftPos = 100;
var topPos = 70;
let i=1;
var speed = 6;

setInterval(collide,10)

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
        pacman.style.transform = "rotate(0deg)";
        leftPos = leftPos + speed;
        pacman.style.left = leftPos + "px";
    }
    if(event.key === "a")
    {
        pacman.style.transform = "rotate(180deg)";
        leftPos = leftPos - speed;
        pacman.style.left = leftPos + "px";
    }
    if(event.key === "w")
    {
        pacman.style.transform = "rotate(-90deg)";
        topPos = topPos - speed;
        pacman.style.top = topPos + "px";
    }
    if(event.key === "s")
    {
        pacman.style.transform = "rotate(90deg)";
        topPos = topPos + speed;
        pacman.style.top = topPos + "px";
    }
    
});
function collide(){
    let pacpos = pacman.getBoundingClientRect();
    let wallpos = wall.getBoundingClientRect();
    if(pacpos===wallpos){
        alert("dont");
    }
}