let pacman = document.querySelector('#pacman');
let pacman_Animation = ['url(img/Pacman-1.png)', 'url(img/Pacman-2.png)', 'url(img/Pacman-3.png)']
let blinky = document.createElement("div");
let pinky = document.createElement("div");
let inky = document.createElement("div");
let clyde = document.createElement("div");

// let leftPos = 430;
// var topPos = 370;
let i=1;
// var speed = 6;
var speedG = 5;
let b=false;

// let horizontalBoundary = document.querySelectorAll('.horizontal-line');
// let verticalBoundary = document.querySelectorAll('.vertical-line');


console.log(horizontalBoundary[2].offsetTop);
setTimeout(ghosts, 10);
setInterval(PacManAnimation, 115);
function PacManAnimation()
{
    i++;
    if(i==3)
        i=0;
    pacman.style.backgroundImage = pacman_Animation[i];    
}

// window.addEventListener("keypress", function(event){
//     console.log(topPos);
//     if(event.key == "d")
//     {
//         pacman.style.transform = "rotate(0deg)";
//         if(topPos > parseInt(verticalBoundary[2].offsetTop) && topPos < parseInt(verticalBoundary[2].offsetTop + 310))
//         {
//             if(leftPos < parseInt(verticalBoundary[2].offsetLeft)-60)
//             {
//                 leftPos = leftPos + speed;
//                 pacman.style.left = leftPos + "px";
//             }
//             if(leftPos < parseInt(verticalBoundary[3].offsetLeft)-60)
//             {
//                 leftPos = leftPos + speed;
//                 pacman.style.left = leftPos + "px";
//             }
//         }
//         else if(leftPos < parseInt(verticalBoundary[1].offsetLeft)-30)
//         {
//             leftPos = leftPos + speed;
//             pacman.style.left = leftPos + "px";
//         }
//     }
//     if(event.key == "a")
//     {
//         pacman.style.transform = "rotate(180deg)";
//         if(topPos > parseInt(verticalBoundary[2].offsetTop) && topPos < parseInt(verticalBoundary[2].offsetTop + 310))
//         {
//             if(leftPos > parseInt(verticalBoundary[2].offsetLeft)+30)
//             {
//                 leftPos = leftPos - speed;
//                 pacman.style.left = leftPos + "px";
//             }
//             if(leftPos > parseInt(verticalBoundary[3].offsetLeft)-60)
//             {
//                 leftPos = leftPos + speed;
//                 pacman.style.left = leftPos + "px";
//             }
// }
//         else if(leftPos > parseInt(verticalBoundary[0].offsetLeft)+40)
//         {
//             leftPos = leftPos - speed;
//             pacman.style.left = leftPos + "px";
//         }
//     }
//     if(event.key == "w")
//     {
//         pacman.style.transform = "rotate(-90deg)";
//         if(leftPos > parseInt(horizontalBoundary[2].offsetLeft) && leftPos < parseInt(horizontalBoundary[2].offsetLeft+910))
//         {
//             if(topPos > parseInt(horizontalBoundary[2].offsetTop)+30)
//             {
//                 topPos = topPos - speed;
//                 pacman.style.top = topPos + "px";
//             }
//             if(topPos > parseInt(horizontalBoundary[3].offsetTop))
//             {
//                 topPos = topPos + speed;
//                 pacman.style.top = topPos + "px";
//             }
// }
//         else if(topPos > parseInt(horizontalBoundary[0].offsetTop)+30)
//         {
//             topPos = topPos - speed;
//             pacman.style.top = topPos + "px";
//         }
//     }
//     if(event.key == "s")
//     {
//         pacman.style.transform = "rotate(90deg)";
//         if(leftPos > parseInt(horizontalBoundary[3].offsetLeft-10) && leftPos < parseInt(horizontalBoundary[3].offsetLeft+910))
//         {
//             if(topPos < parseInt(horizontalBoundary[3].offsetTop)-60)
//             {
//                 topPos = topPos + speed;
//                 pacman.style.top = topPos + "px";
//             }
//             if(topPos < parseInt(horizontalBoundary[2].offsetTop))
//             {
//                 topPos = topPos - speed;
//                 pacman.style.top = topPos + "px";
//             }
//         }
//         else if(topPos < parseInt(horizontalBoundary[1].offsetTop)-60)
//         {
//             topPos = topPos + speed;
//             pacman.style.top = topPos + "px";
//         }
//     }
// });

console.log("check");

// function ghosts(){
//     var block = document.querySelector('.block');
//     block.appendChild(blinky);
//     block.appendChild(pinky);
//     block.appendChild(inky);
//     block.appendChild(clyde);

//     blinky.classList.add("ghost");
//     blinky.classList.add("blinky");
//     pinky.classList.add("ghost");
//     pinky.classList.add("pinky");
//     inky.classList.add("ghost");
//     inky.classList.add("inky");
//     clyde.classList.add("ghost");
//     clyde.classList.add("clyde");
//     let ghosts = document.querySelectorAll('.ghost');
//     let n = [Math.ceil((Math.random()*4)),Math.ceil((Math.random()*4)),Math.ceil((Math.random()*4)),Math.ceil((Math.random()*4))];
//     let int = setInterval(moveGhosts,15);
//     function moveGhosts(){
//         for(let j=0;j<4;j++){
//             // console.log(n);
//             let gh = ghosts[j];
//             let gh_top = gh.getBoundingClientRect().top;
//             let gh_left = gh.getBoundingClientRect().left;
//             switch(n[j]){
//                 case 1:
//                     if(gh_top > parseInt(verticalBoundary[2].offsetTop) && gh_top < parseInt(verticalBoundary[2].offsetTop + 310))
//                     {
//                         if(gh_left < parseInt(verticalBoundary[2].offsetLeft)-60)
//                         {
//                             gh_left = gh_left+speedG;
//                             gh.style.left = gh_left + "px";
//                         }
//                         else if(gh_left < parseInt(verticalBoundary[3].offsetLeft)-60)
//                         {
//                             gh_left = gh_left+speedG;
//                             gh.style.left = gh_left + "px";
//                         }
//                         else{
//                             n[j]=Math.ceil((Math.random()*4));
//                         }
//                     }
//                     else if(gh_left < parseInt(verticalBoundary[1].offsetLeft)-30)
//                     {
//                         gh_left = gh_left+speedG;
//                         gh.style.left = gh_left + "px";
//                     }
//                     else{
//                         n[j]=Math.ceil((Math.random()*4));
//                     }
//                 case 2:
//                     if(gh_top > parseInt(verticalBoundary[2].offsetTop) && gh_top < parseInt(verticalBoundary[2].offsetTop + 310))
//                     {
//                         if(gh_left > parseInt(verticalBoundary[2].offsetLeft)+30)
//                         {
//                             gh_left = gh_left - speedG;
//                             gh.style.left = gh_left + "px";
//                         }
//                         else if(gh_left > parseInt(verticalBoundary[3].offsetLeft)-60)
//                         {
//                             gh_left = gh_left + speedG;
//                             gh.style.left = gh_left + "px";
//                         }
//                         else{
//                             n[j]=Math.ceil((Math.random()*4));
//                         }
//                     }
//                     else if(gh_left > parseInt(verticalBoundary[0].offsetLeft)+40)
//                     {
//                         gh_left = gh_left - speedG;
//                         gh.style.left = gh_left + "px";
//                     }
//                     else{
//                         n[j]=Math.ceil((Math.random()*4));
//                     }
//                 case 3:


//                     if(gh_left > parseInt(horizontalBoundary[2].offsetLeft) && gh_left < parseInt(horizontalBoundary[2].offsetLeft+900))
//                     {
//                         if(gh_left > parseInt(horizontalBoundary[4].offsetLeft) && gh_left < parseInt(horizontalBoundary[4].offsetLeft+400))
//                         {
//                             if(gh_top > parseInt(horizontalBoundary[4].offsetTop))
//                             {
//                                 gh_top = gh_top + speedG;
//                                 gh.style.top = gh_top + "px";
//                             }
//                             else{
//                                 n[j]=Math.ceil((Math.random()*4));
//                             }
//                         }
//                         else if(gh_left > parseInt(horizontalBoundary[6].offsetLeft)-60 && gh_left < parseInt(horizontalBoundary[6].offsetLeft+200))
//                         {
//                             if(gh_top < parseInt(horizontalBoundary[6].offsetTop)+30)
//                             {
//                                 gh_top = gh_top + speedG;
//                                 gh.style.top = gh_top + "px";
//                             }
//                             else{
//                                 n[j]=Math.ceil((Math.random()*4));
//                             }
//                         }
//                         else if(gh_left > parseInt(horizontalBoundary[7].offsetLeft) && gh_left < parseInt(horizontalBoundary[7].offsetLeft+200))
//                         {
//                             if(gh_top < parseInt(horizontalBoundary[7].offsetTop)+30)
//                             {
//                                 gh_top = gh_top + speedG;
//                                 gh.style.top = gh_top + "px";
//                             }
//                             else{
//                                 n[j]=Math.ceil((Math.random()*4));
//                             }
//                         }
//                         else if(gh_top > parseInt(horizontalBoundary[2].offsetTop)+30)
//                         {
//                             gh_top = gh_top - speedG;
//                             gh.style.top = gh_top + "px";
//                         }
//                         else if(gh_top > parseInt(horizontalBoundary[3].offsetTop))
//                         {
//                             gh_top = gh_top + speedG;
//                             gh.style.top = gh_top + "px";
//                         }
//                         else{
//                             n[j]=Math.ceil((Math.random()*4));
//                         }
//                     }
//                     else if(gh_top > parseInt(horizontalBoundary[0].offsetTop)+30)
//                     {
//                         gh_top = gh_top - speedG;
//                         gh.style.top = gh_top + "px";
//                     }
//                     else{
//                         n[j]=Math.ceil((Math.random()*4));
//                     }











//                     // if(gh_left > parseInt(horizontalBoundary[2].offsetLeft) && gh_left < parseInt(horizontalBoundary[2].offsetLeft+900))
//                     // {
//                     //     if(gh_left > parseInt(horizontalBoundary[4].offsetLeft) && gh_left < parseInt(horizontalBoundary[4].offsetLeft+400))
//                     //     {
//                     //         if(gh_top > parseInt(horizontalBoundary[4].offsetTop))
//                     //         {
//                     //             gh_top = gh_top + speedG;
//                     //             gh.style.top = gh_top + "px";
//                     //         }
//                     //         else{
//                     //             n[j]=Math.ceil((Math.random()*4));
//                     //         }
//                     //     }
//                     //     else if(gh_left > parseInt(horizontalBoundary[6].offsetLeft)-60 && gh_left < parseInt(horizontalBoundary[6].offsetLeft+200))
//                     //     {
//                     //         if(gh_top < parseInt(horizontalBoundary[6].offsetTop)+30)
//                     //         {
//                     //             gh_top = gh_top + speedG;
//                     //             gh.style.top = gh_top + "px";
//                     //         }
//                     //         else{
//                     //             n[j]=Math.ceil((Math.random()*4));
//                     //         }
//                     //     }
//                     //     else if(gh_left > parseInt(horizontalBoundary[7].offsetLeft) && gh_left < parseInt(horizontalBoundary[7].offsetLeft+200))
//                     //     {
//                     //         if(gh_top < parseInt(horizontalBoundary[7].offsetTop)+30)
//                     //         {
//                     //             gh_top = gh_top + speedG;
//                     //             gh.style.top = gh_top + "px";
//                     //         }
//                     //         else{
//                     //             n[j]=Math.ceil((Math.random()*4));
//                     //         }
//                     //     }
//                     //     else if(gh_top > parseInt(horizontalBoundary[2].offsetTop)+30)
//                     //     {
//                     //         gh_top = gh_top - speedG;
//                     //         gh.style.top = gh_top + "px";
//                     //     }
//                     //     else if(gh_top > parseInt(horizontalBoundary[3].offsetTop))
//                     //     {
//                     //         gh_top = gh_top + speedG;
//                     //         gh.style.top = gh_top + "px";
//                     //     }
//                     //     else{
//                     //         n[j]=Math.ceil((Math.random()*4));
//                     //     }
//                     // }
//                     // else if(gh_top > parseInt(horizontalBoundary[0].offsetTop)+30)
//                     // {
//                     //     gh_top = gh_top - speedG;
//                     //     gh.style.top = gh_top + "px";
//                     // }
//                     // else{
//                     //     n[j]=Math.ceil((Math.random()*4));
//                     // }


//                     // if(gh_left > parseInt(horizontalBoundary[2].offsetLeft) && gh_left < parseInt(horizontalBoundary[2].offsetLeft+910))
//                     // {
//                     //     if(gh_top > parseInt(horizontalBoundary[2].offsetTop)+30)
//                     //     {
//                     //         gh_top = gh_top - speedG;
//                     //         gh.style.top = gh_top + "px";
//                     //     }
//                     //     else if(gh_top > parseInt(horizontalBoundary[3].offsetTop))
//                     //     {
//                     //         gh_top = gh_top + speedG;
//                     //         gh.style.top = gh_top + "px";
//                     //     }
//                     //     else{
//                     //         n[j]=Math.ceil((Math.random()*4));
//                     //     }
//                     // }
//                     // else if(gh_top > parseInt(horizontalBoundary[0].offsetTop)+30)
//                     // {
//                     //     gh_top = gh_top - speedG;
//                     //     gh.style.top = gh_top + "px";
//                     // }
//                     // else{
//                     //     n[j]=Math.ceil((Math.random()*4));
//                     // }
//                 case 4:
//                     if(gh_left > parseInt(horizontalBoundary[3].offsetLeft-10) && gh_left < parseInt(horizontalBoundary[3].offsetLeft+910))
//                     {
//                         if(gh_left > parseInt(horizontalBoundary[5].offsetLeft) && gh_left < parseInt(horizontalBoundary[5].offsetLeft+400))
//                         {
//                             if(gh_top < parseInt(horizontalBoundary[5].offsetTop)-60)
//                             {
//                                 gh_top = gh_top + speedG;
//                                 gh.style.top = gh_top + "px";
//                             }
//                             else{
//                                 n[j]=Math.ceil((Math.random()*4));
//                             }
//                         }
//                         else if(gh_left > parseInt(horizontalBoundary[6].offsetLeft)-60 && gh_left < parseInt(horizontalBoundary[6].offsetLeft+200))
//                         {
//                             if(gh_top > parseInt(horizontalBoundary[6].offsetTop) && gh_top < parseInt(horizontalBoundary[3].offsetTop)-60)
//                             {
//                                 gh_top = gh_top + speedG;
//                                 gh.style.top = gh_top + "px";
//                             }
//                             else{
//                                 n[j]=Math.ceil((Math.random()*4));
//                             }
//                         }
//                         else if(leftPos > parseInt(horizontalBoundary[7].offsetLeft)-60 && leftPos < parseInt(horizontalBoundary[7].offsetLeft+200))
//                         {
//                             if(gh_top > parseInt(horizontalBoundary[7].offsetTop) && gh_top < parseInt(horizontalBoundary[3].offsetTop)-60)
//                             {
//                                 gh_top = gh_top + speedG;
//                                 gh.style.top = gh_top + "px";
//                             }
//                             else{
//                                 n[j]=Math.ceil((Math.random()*4));
//                             }
//                         }
//                         else if(gh_top < parseInt(horizontalBoundary[3].offsetTop)-60)
//                         {
//                             gh_top = gh_top + speedG;
//                             gh.style.top = gh_top + "px";
//                         }
//                         else if(gh_top < parseInt(horizontalBoundary[2].offsetTop))
//                         {
//                             gh_top = gh_top - speedG;
//                             gh.style.top = gh_top + "px";
//                         }
//                         else{
//                             n[j]=Math.ceil((Math.random()*4));
//                         }
//                     }
//                     else if(gh_top < parseInt(horizontalBoundary[1].offsetTop)-60)
//                     {
//                         gh_top = gh_top + speedG;
//                         gh.style.top = gh_top + "px";
//                     }
//                     else{
//                         n[j]=Math.ceil((Math.random()*4));
//                     }







//                     // if(gh_left > parseInt(horizontalBoundary[3].offsetLeft-10) && gh_left < parseInt(horizontalBoundary[3].offsetLeft+910))
//                     // {
//                     //     if(gh_left > parseInt(horizontalBoundary[5].offsetLeft) && gh_left < parseInt(horizontalBoundary[5].offsetLeft+400))
//                     //     {
//                     //         if(gh_top > parseInt(horizontalBoundary[5].offsetTop)-30)
//                     //         {
//                     //             gh.style.top = gh_top + "px";
//                     //             console.log("Blah 1-1");
//                     //         }
//                     //         else{
//                     //             n[j]=Math.ceil((Math.random()*4));
//                     //         }
//                     //     }
//                     //     else if(gh_top < parseInt(horizontalBoundary[3].offsetTop)-60)
//                     //     {
//                     //         gh_top = gh_top + speedG;
//                     //         gh.style.top = gh_top + "px";
//                     //     }
//                     //     else if(gh_top < parseInt(horizontalBoundary[2].offsetTop))
//                     //     {
//                     //         gh_top = gh_top - speedG;
//                     //         gh.style.top = gh_top + "px";
//                     //     }
//                     //     else{
//                     //         n[j]=Math.ceil((Math.random()*4));
//                     //     }
//                     // }
//                     // else if(gh_top < parseInt(horizontalBoundary[1].offsetTop)-60)
//                     // {
//                     //     gh_top = gh_top + speedG;
//                     //     gh.style.top = gh_top + "px";
//                     // }
//                     // else{
//                     //     n[j]=Math.ceil((Math.random()*4));
//                     // }
                    






//                     // if(gh_left > parseInt(horizontalBoundary[3].offsetLeft-10) && gh_left < parseInt(horizontalBoundary[3].offsetLeft+910))
//                     // {
//                     //     if(gh_top < parseInt(horizontalBoundary[3].offsetTop)-60)
//                     //     {
//                     //         gh_top = gh_top + speedG;
//                     //         gh.style.top = gh_top + "px";
//                     //     }
//                     //     else if(gh_top < parseInt(horizontalBoundary[2].offsetTop))
//                     //     {
//                     //         gh_top = gh_top - speedG;
//                     //         gh.style.top = gh_top + "px";
//                     //     }
//                     //     else{
//                     //         n[j]=Math.ceil((Math.random()*4));
//                     //     }
//                     // }
//                     // else if(gh_top < parseInt(horizontalBoundary[1].offsetTop)-60)
//                     // {
//                     //     gh_top = gh_top + speedG;
//                     //     gh.style.top = gh_top + "px";
//                     // }
//                     // else{
//                     //     n[j]=Math.ceil((Math.random()*4));
//                     // }


//             }
//         }
//     }
// };
