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
    else
        break;
}
for(let x=0; x<100;x++) {
    if(orbLeft > parseInt(verticalBoundary[1].offsetLeft) - 60 && orbTop < parseInt(horizontalBoundary[1].offsetTop) - 90)
    {
        var orb = document.createElement('div');
        console.log("yeeet 1");
        orb.className = "points";
        orb.style.left = orbLeft + "px";
        orb.style.top = orbTop + "px";
        orbTop = orbTop + 50;
        document.getElementById('orbs').appendChild(orb);
    }
    else
        break;
}
for(let x=0; x<100;x++) {
    if(orbLeft > parseInt(verticalBoundary[0].offsetLeft) + 50 && orbTop > parseInt(horizontalBoundary[1].offsetTop) - 90)
    {
        var orb = document.createElement('div');
        console.log("yeeet 1");
        orb.className = "points";
        orb.style.left = orbLeft + "px";
        orb.style.top = orbTop + "px";
        orbLeft = orbLeft - 50;
        document.getElementById('orbs').appendChild(orb);
    }
    else
        break;
}
for(let x=0; x<100;x++) {
    if(orbLeft < parseInt(verticalBoundary[1].offsetLeft) - 90 && orbTop > parseInt(horizontalBoundary[0].offsetTop) + 60)
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
let points = document.querySelectorAll('.points')

setInterval(checkScore, 1);
function checkScore()
{
    for(let i=0;i<points.length;i++)
    {
        if((parseInt(pacman.offsetLeft) <= parseInt(points[i].offsetLeft)+10 && parseInt(pacman.offsetLeft) >= parseInt(points[i].offsetLeft)-10) 
            && (parseInt(pacman.offsetTop) <= parseInt(points[i].offsetTop)+10 && parseInt(pacman.offsetTop) >= parseInt(points[i].offsetTop)-10))
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