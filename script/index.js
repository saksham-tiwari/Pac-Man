let pacman = document.querySelector('#pacman');
let pacman_Animation = ['url(img/Pacman-1.png)', 'url(img/Pacman-2.png)', 'url(img/Pacman-3.png)']
let leftPos = 430;
var topPos = 370;
let i=1;
var speed = 6;
let b=false;

let horizontalBoundary = document.querySelectorAll('.horizontal-line');
let verticalBoundary = document.querySelectorAll('.vertical-line');

console.log(horizontalBoundary[2].offsetTop);

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
    if(event.key == "d")
    {
        pacman.style.transform = "rotate(0deg)";
        if(topPos > parseInt(verticalBoundary[2].offsetTop) && topPos < parseInt(verticalBoundary[2].offsetTop + 310))
        {
            if(leftPos < parseInt(verticalBoundary[2].offsetLeft)-60)
            {
                leftPos = leftPos + speed;
                pacman.style.left = leftPos + "px";
            }
            if(leftPos < parseInt(verticalBoundary[3].offsetLeft)-60)
            {
                leftPos = leftPos + speed;
                pacman.style.left = leftPos + "px";
            }
        }
        else if(leftPos < parseInt(verticalBoundary[1].offsetLeft)-30)
        {
            leftPos = leftPos + speed;
            pacman.style.left = leftPos + "px";
        }
    }
    if(event.key == "a")
    {
        pacman.style.transform = "rotate(180deg)";
        if(topPos > parseInt(verticalBoundary[2].offsetTop) && topPos < parseInt(verticalBoundary[2].offsetTop + 310))
        {
            if(leftPos > parseInt(verticalBoundary[2].offsetLeft)+30)
            {
                leftPos = leftPos - speed;
                pacman.style.left = leftPos + "px";
            }
            if(leftPos > parseInt(verticalBoundary[3].offsetLeft)-60)
            {
                leftPos = leftPos + speed;
                pacman.style.left = leftPos + "px";
            }
}
        else if(leftPos > parseInt(verticalBoundary[0].offsetLeft)+40)
        {
            leftPos = leftPos - speed;
            pacman.style.left = leftPos + "px";
        }
    }
    if(event.key == "w")
    {
        pacman.style.transform = "rotate(-90deg)";
        if(leftPos > parseInt(horizontalBoundary[2].offsetLeft) && leftPos < parseInt(horizontalBoundary[2].offsetLeft+910))
        {
            if(topPos > parseInt(horizontalBoundary[2].offsetTop)+30)
            {
                topPos = topPos - speed;
                pacman.style.top = topPos + "px";
            }
            if(topPos > parseInt(horizontalBoundary[3].offsetTop))
            {
                topPos = topPos + speed;
                pacman.style.top = topPos + "px";
            }
}
        else if(topPos > parseInt(horizontalBoundary[0].offsetTop)+30)
        {
            topPos = topPos - speed;
            pacman.style.top = topPos + "px";
        }
    }
    if(event.key == "s")
    {
        pacman.style.transform = "rotate(90deg)";
        if(leftPos > parseInt(horizontalBoundary[3].offsetLeft-10) && leftPos < parseInt(horizontalBoundary[3].offsetLeft+910))
        {
            if(topPos < parseInt(horizontalBoundary[3].offsetTop)-60)
            {
                topPos = topPos + speed;
                pacman.style.top = topPos + "px";
            }
            if(topPos < parseInt(horizontalBoundary[2].offsetTop))
            {
                topPos = topPos - speed;
                pacman.style.top = topPos + "px";
            }
        }
        else if(topPos < parseInt(horizontalBoundary[1].offsetTop)-60)
        {
            topPos = topPos + speed;
            pacman.style.top = topPos + "px";
        }
    }
});

