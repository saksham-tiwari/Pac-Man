let leftPos = pacman.offsetLeft;
var topPos = pacman.offsetTop;
var speed = 5;

let horizontalBoundary = document.querySelectorAll('.horizontal-line');
let verticalBoundary = document.querySelectorAll('.vertical-line');

console.log(verticalBoundary[2].offsetLeft);

window.addEventListener("keypress", function(event){
    // console.log(topPos);
    console.log(leftPos);
    if(event.key == "d")
    {
        pacman.style.transform = "rotate(0deg)";
        if(topPos > parseInt(verticalBoundary[2].offsetTop) && topPos < parseInt(verticalBoundary[2].offsetTop + 300))
        {
            if(leftPos > parseInt(verticalBoundary[2].offsetLeft) && leftPos < parseInt(verticalBoundary[3].offsetLeft)-60)
            {
                console.log("b");
                leftPos = leftPos + speed;
                pacman.style.left = leftPos + "px";
            }
            // if(leftPos < parseInt(verticalBoundary[3].offsetLeft)-60)
            // {
            //     leftPos = leftPos + speed;
            //     pacman.style.left = leftPos + "px";
            // }
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
        if(leftPos > parseInt(horizontalBoundary[2].offsetLeft) && leftPos < parseInt(horizontalBoundary[2].offsetLeft+900))
        {
            if(leftPos > parseInt(horizontalBoundary[4].offsetLeft) && leftPos < parseInt(horizontalBoundary[4].offsetLeft+400))
            {
                if(topPos > parseInt(horizontalBoundary[4].offsetTop))
                {
                    topPos = topPos + speed;
                    pacman.style.top = topPos + "px";
                }
            }
            if(leftPos > parseInt(horizontalBoundary[6].offsetLeft)-60 && leftPos < parseInt(horizontalBoundary[6].offsetLeft+200))
            {
                if(topPos < parseInt(horizontalBoundary[6].offsetTop)+30)
                {
                    topPos = topPos + speed;
                    pacman.style.top = topPos + "px";
                }
            }
            if(leftPos > parseInt(horizontalBoundary[7].offsetLeft) && leftPos < parseInt(horizontalBoundary[7].offsetLeft+200))
            {
                if(topPos < parseInt(horizontalBoundary[7].offsetTop)+30)
                {
                    topPos = topPos + speed;
                    pacman.style.top = topPos + "px";
                }
            }
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
            if(leftPos > parseInt(horizontalBoundary[5].offsetLeft) && leftPos < parseInt(horizontalBoundary[5].offsetLeft+400))
            {
                if(topPos < parseInt(horizontalBoundary[5].offsetTop)-60)
                {
                    topPos = topPos + speed;
                    pacman.style.top = topPos + "px";
                }
            }
            else if(leftPos > parseInt(horizontalBoundary[6].offsetLeft)-60 && leftPos < parseInt(horizontalBoundary[6].offsetLeft+200))
            {
                if(topPos > parseInt(horizontalBoundary[6].offsetTop) && topPos < parseInt(horizontalBoundary[3].offsetTop)-60)
                {
                    topPos = topPos + speed;
                    pacman.style.top = topPos + "px";
                }
            }
            else if(leftPos > parseInt(horizontalBoundary[7].offsetLeft)-60 && leftPos < parseInt(horizontalBoundary[7].offsetLeft+200))
            {
                if(topPos > parseInt(horizontalBoundary[7].offsetTop) && topPos < parseInt(horizontalBoundary[3].offsetTop)-60)
                {
                    topPos = topPos + speed;
                    pacman.style.top = topPos + "px";
                }
            }
            else if(topPos < parseInt(horizontalBoundary[3].offsetTop)-60)
            {
                topPos = topPos + speed;
                pacman.style.top = topPos + "px";
            }
            else if(topPos < parseInt(horizontalBoundary[2].offsetTop))
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