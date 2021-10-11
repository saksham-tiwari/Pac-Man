let j=-1;
let removeOrb = false;
var Score = 0;
let orbLeft = parseInt(verticalBoundary[0].offsetLeft) + 40;
let orbTop = parseInt(verticalBoundary[0].offsetTop) + 30;

// console.log(points[0].offsetLeft);
// console.log(points[0].offsetTop);
// console.log(pacman.offsetLeft);
// console.log(pacman.offsetTop);
// console.log(points.length);

for(let x=0; x<100;x++) {
    if(orbLeft < parseInt(verticalBoundary[1].offsetLeft) - 90 && orbTop === parseInt(horizontalBoundary[0].offsetTop) + 30)
    {
        var orb = document.createElement('div');
        console.log("yeeet 1");
        orb.className = "points";
        orb.style.left = orbLeft + "px";
        orb.style.top = orbTop + "px";
        orbLeft = orbLeft + 50;
        document.getElementById('orbs').appendChild(orb);
    }
    else if(orbLeft > parseInt(verticalBoundary[1].offsetLeft) - 60 && orbTop < parseInt(horizontalBoundary[1].offsetTop) - 90)
    {
        var orb = document.createElement('div');
        console.log("yeeet 1");
        orb.className = "points";
        orb.style.left = orbLeft + "px";
        orb.style.top = orbTop + "px";
        orbTop = orbTop + 50;
        document.getElementById('orbs').appendChild(orb);
    }
    else if(orbLeft > parseInt(verticalBoundary[0].offsetLeft) + 50 && orbTop > parseInt(horizontalBoundary[1].offsetTop) - 90)
    {
        var orb = document.createElement('div');
        console.log("yeeet 1");
        orb.className = "points";
        orb.style.left = orbLeft + "px";
        orb.style.top = orbTop + "px";
        orbLeft = orbLeft - 50;
        document.getElementById('orbs').appendChild(orb);
    }
    else if(orbLeft < parseInt(verticalBoundary[1].offsetLeft) - 90 && orbTop > parseInt(horizontalBoundary[0].offsetTop) + 60)
    {
        var orb = document.createElement('div');
        console.log("yeeet 1");
        orb.className = "points";
        orb.style.left = orbLeft + "px";
        orb.style.top = orbTop + "px";
        orbTop = orbTop - 50;
        document.getElementById('orbs').appendChild(orb);
    }
    else
        break;
}

orbLeft = parseInt(verticalBoundary[2].offsetLeft) + 30;
orbTop = parseInt(horizontalBoundary[0].offsetTop) + 80;
for(x=0;x<100;x++)
{
    if(orbTop < parseInt(horizontalBoundary[1].offsetTop) - 90)
    {
        var orb = document.createElement('div');
        orb.className = "points";
        orb.style.left = orbLeft + "px";
        orb.style.top = orbTop + "px";
        orbTop = orbTop + 50;
        document.getElementById('orbs').appendChild(orb);
    }
    else
        break;
}

orbLeft = parseInt(verticalBoundary[3].offsetLeft) - 60;
orbTop = parseInt(horizontalBoundary[0].offsetTop) + 80;
for(x=0;x<100;x++)
{
    if(orbTop < parseInt(horizontalBoundary[1].offsetTop) - 90)
    {
        var orb = document.createElement('div');
        orb.className = "points";
        orb.style.left = orbLeft + "px";
        orb.style.top = orbTop + "px";
        orbTop = orbTop + 50;
        document.getElementById('orbs').appendChild(orb);
    }
    else
        break;
}

orbLeft = parseInt(verticalBoundary[2].offsetLeft) + 80;
orbTop = parseInt(horizontalBoundary[2].offsetTop) + 30;
for(x=0;x<100;x++)
{
    if(orbLeft < parseInt(verticalBoundary[3].offsetLeft) - 90)
    {
        var orb = document.createElement('div');
        orb.className = "points";
        orb.style.left = orbLeft + "px";
        orb.style.top = orbTop + "px";
        orbLeft = orbLeft + 50;
        document.getElementById('orbs').appendChild(orb);
    }
    else
        break;
}

orbLeft = parseInt(verticalBoundary[2].offsetLeft) + 80;
orbTop = parseInt(horizontalBoundary[3].offsetTop) - 60;
for(x=0;x<100;x++)
{
    if(orbLeft < parseInt(verticalBoundary[3].offsetLeft) - 90)
    {
        if(orbLeft < parseInt(verticalBoundary[4].offsetLeft) + 30 || orbLeft > parseInt(verticalBoundary[5].offsetLeft) + 30)
        var orb = document.createElement('div');
        orb.className = "points";
        orb.style.left = orbLeft + "px";
        orb.style.top = orbTop + "px";
        orbLeft = orbLeft + 50;
        document.getElementById('orbs').appendChild(orb);
    }
    else
        break;
}

orbLeft = parseInt(verticalBoundary[6].offsetLeft) + 75;
orbTop = parseInt(horizontalBoundary[6].offsetTop) + 30;
for(x=0;x<100;x++)
{
    if(orbTop < parseInt(horizontalBoundary[3].offsetTop) - 90)
    {
        var orb = document.createElement('div');
        orb.className = "points";
        orb.style.left = orbLeft + "px";
        orb.style.top = orbTop + "px";
        orbTop = orbTop + 50;
        document.getElementById('orbs').appendChild(orb);
    }
    else
        break;
}

orbLeft = parseInt(verticalBoundary[7].offsetLeft) - 75;
orbTop = parseInt(horizontalBoundary[6].offsetTop) + 30;
for(x=0;x<100;x++)
{
    if(orbTop < parseInt(horizontalBoundary[3].offsetTop) - 90)
    {
        var orb = document.createElement('div');
        orb.className = "points";
        orb.style.left = orbLeft + "px";
        orb.style.top = orbTop + "px";
        orbTop = orbTop + 50;
        document.getElementById('orbs').appendChild(orb);
    }
    else
        break;
}

let points = document.querySelectorAll('.points')

setInterval(checkScore, 1);
function checkScore()
{
    for(let i=0;i<points.length;i++)
    {
        if((parseInt(pacman.offsetLeft) <= parseInt(points[i].offsetLeft)+20 && parseInt(pacman.offsetLeft) >= parseInt(points[i].offsetLeft)-20) 
            && (parseInt(pacman.offsetTop) <= parseInt(points[i].offsetTop)+20 && parseInt(pacman.offsetTop) >= parseInt(points[i].offsetTop)-20))
        {
            removeOrb = true;
            if(removeOrb === true)
            {
                Score++;
                removeOrb = false;
                points[i].remove();
            }
            console.log(Score);
        }
    }
}