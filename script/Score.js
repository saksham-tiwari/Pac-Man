let points = document.querySelectorAll('.points')
let j=-1;

console.log(points[0].style.display);
console.log(points[0].offsetTop);

for(let i=0;i<points.size;i++)
{
    if(pacman.offsetLeft === points[i].offsetLeft && pacman.offsetTop === points[i].offsetTop)
    {
        points[i].style.display = "none";
    }
}