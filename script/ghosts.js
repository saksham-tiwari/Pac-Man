function ghosts(){
    var block = document.querySelector('.block');
    block.appendChild(blinky);
    block.appendChild(pinky);
    block.appendChild(inky);
    block.appendChild(clyde);

    blinky.classList.add("ghost");
    blinky.classList.add("blinky");
    pinky.classList.add("ghost");
    pinky.classList.add("pinky");
    inky.classList.add("ghost");
    inky.classList.add("inky");
    clyde.classList.add("ghost");
    clyde.classList.add("clyde");
    let ghosts = document.querySelectorAll('.ghost');
    
    let n = [Math.ceil((Math.random()*4)),Math.ceil((Math.random()*4)),Math.ceil((Math.random()*4)),Math.ceil((Math.random()*4))];
    setTimeout(()=>{n = [Math.ceil((Math.random()*4)),Math.ceil((Math.random()*4)),Math.ceil((Math.random()*4)),Math.ceil((Math.random()*4))];},1000);
    let int = setInterval(moveGhosts,50);
    function moveGhosts(){
        for(let j=0;j<4;j++){
            console.log(n);
            let gh = ghosts[j];
            let gh_top = parseInt(gh.offsetTop);
            let gh_left = parseInt(gh.offsetLeft);
            
    
            switch(n[j]){
                case 1:
                    if(gh_top > parseInt(verticalBoundary[2].offsetTop) && gh_top < parseInt(verticalBoundary[2].offsetTop) + 300)
                    {
                        if(gh_top > parseInt(verticalBoundary[6].offsetTop) && gh_top < parseInt(verticalBoundary[6].offsetTop) + 100)
                        {
                            if(gh_left > parseInt(verticalBoundary[6].offsetLeft) && gh_left < parseInt(verticalBoundary[7].offsetLeft)-60)
                            {
                                gh_left = gh_left + speedG;
                                gh.style.left = gh_left + "px";
                            }
                            else{
                                n[j]=Math.ceil((Math.random()*4));
                            }
                        }
                        else if(gh_left > parseInt(verticalBoundary[2].offsetLeft) && gh_left < parseInt(verticalBoundary[3].offsetLeft)-60)
                        {
                            gh_left = gh_left + speedG;
                            gh.style.left = gh_left + "px";
                        }
                        else{
                            n[j]=Math.ceil((Math.random()*4));
                        }
                    }
                    else if(gh_left < parseInt(verticalBoundary[1].offsetLeft)-60)
                    {
                        gh_left = gh_left + speedG;
                        gh.style.left = gh_left + "px";
                    }
                    else{
                        n[j]=Math.ceil((Math.random()*4));
                    }
                break;
                case 2:
                    if(gh_top > parseInt(verticalBoundary[2].offsetTop) && gh_top < parseInt(verticalBoundary[2].offsetTop) + 300)
                    {
                        if(gh_top > parseInt(verticalBoundary[6].offsetTop) && gh_top < parseInt(verticalBoundary[6].offsetTop) + 100)
                        {
                            if(gh_left > parseInt(verticalBoundary[6].offsetLeft)+30 && gh_left < parseInt(verticalBoundary[7].offsetLeft))
                            {
                                gh_left = gh_left - speedG;
                                gh.style.left = gh_left + "px";
                            }
                            else{
                                n[j]=Math.ceil((Math.random()*4));
                            }
                        }
                        else if(gh_left > parseInt(verticalBoundary[2].offsetLeft)+30 && gh_left < parseInt(verticalBoundary[3].offsetLeft))
                        {
                            gh_left = gh_left - speedG;
                            gh.style.left = gh_left + "px";
                        }
                        else{
                            n[j]=Math.ceil((Math.random()*4));
                        }
                    }
                    else if(gh_left > parseInt(verticalBoundary[0].offsetLeft)+50)
                    {
                        gh_left = gh_left - speedG;
                        gh.style.left = gh_left + "px";
                    }
                    else{
                        n[j]=Math.ceil((Math.random()*4));
                    }
                break;
                case 3:

                    if(gh_left > parseInt(horizontalBoundary[2].offsetLeft) && gh_left < parseInt(horizontalBoundary[2].offsetLeft+700))
                    {
                        if(gh_left > parseInt(horizontalBoundary[4].offsetLeft) && gh_left < parseInt(horizontalBoundary[4].offsetLeft+300))
                        {
                            if(gh_top > parseInt(horizontalBoundary[4].offsetTop))
                            {
                                gh_top = gh_top + speedG;
                                gh.style.top = gh_top + "px";
                            }
                            else{
                                n[j]=Math.ceil((Math.random()*4));
                            }
                        }
                        if(gh_left > parseInt(horizontalBoundary[6].offsetLeft)-60 && gh_left < parseInt(horizontalBoundary[6].offsetLeft+200))
                        {
                            if(gh_top < parseInt(horizontalBoundary[6].offsetTop)+30)
                            {
                                gh_top = gh_top + speedG;
                                gh.style.top = gh_top + "px";
                            }
                            else{
                                n[j]=Math.ceil((Math.random()*4));
                            }
                        }
                        if(gh_left > parseInt(horizontalBoundary[7].offsetLeft) && gh_left < parseInt(horizontalBoundary[7].offsetLeft+200))
                        {
                            if(gh_top < parseInt(horizontalBoundary[7].offsetTop)+30)
                            {
                                gh_top = gh_top + speedG;
                                gh.style.top = gh_top + "px";
                            }
                            else{
                                n[j]=Math.ceil((Math.random()*4));
                            }
                        }
                        if(gh_top > parseInt(horizontalBoundary[2].offsetTop)+30)
                        {
                            gh_top = gh_top - speedG;
                            gh.style.top = gh_top + "px";
                        }
                        if(gh_top > parseInt(horizontalBoundary[3].offsetTop))
                        {
                            gh_top = gh_top + speedG;
                            gh.style.top = gh_top + "px";
                        }
                        else{
                            n[j]=Math.ceil((Math.random()*4));
                        }
                    }
                    else if(gh_top > parseInt(horizontalBoundary[0].offsetTop)+30)
                    {
                        gh_top = gh_top - speedG;
                        gh.style.top = gh_top + "px";
                    }
                    else{
                        n[j]=Math.ceil((Math.random()*4));
                    }
                break;











                    // if(gh_left > parseInt(horizontalBoundary[2].offsetLeft) && gh_left < parseInt(horizontalBoundary[2].offsetLeft+900))
                    // {
                    //     if(gh_left > parseInt(horizontalBoundary[4].offsetLeft) && gh_left < parseInt(horizontalBoundary[4].offsetLeft+400))
                    //     {
                    //         if(gh_top > parseInt(horizontalBoundary[4].offsetTop))
                    //         {
                    //             gh_top = gh_top + speedG;
                    //             gh.style.top = gh_top + "px";
                    //         }
                    //         else{
                    //             n[j]=Math.ceil((Math.random()*4));
                    //         }
                    //     }
                    //     else if(gh_left > parseInt(horizontalBoundary[6].offsetLeft)-60 && gh_left < parseInt(horizontalBoundary[6].offsetLeft+200))
                    //     {
                    //         if(gh_top < parseInt(horizontalBoundary[6].offsetTop)+30)
                    //         {
                    //             gh_top = gh_top + speedG;
                    //             gh.style.top = gh_top + "px";
                    //         }
                    //         else{
                    //             n[j]=Math.ceil((Math.random()*4));
                    //         }
                    //     }
                    //     else if(gh_left > parseInt(horizontalBoundary[7].offsetLeft) && gh_left < parseInt(horizontalBoundary[7].offsetLeft+200))
                    //     {
                    //         if(gh_top < parseInt(horizontalBoundary[7].offsetTop)+30)
                    //         {
                    //             gh_top = gh_top + speedG;
                    //             gh.style.top = gh_top + "px";
                    //         }
                    //         else{
                    //             n[j]=Math.ceil((Math.random()*4));
                    //         }
                    //     }
                    //     else if(gh_top > parseInt(horizontalBoundary[2].offsetTop)+30)
                    //     {
                    //         gh_top = gh_top - speedG;
                    //         gh.style.top = gh_top + "px";
                    //     }
                    //     else if(gh_top > parseInt(horizontalBoundary[3].offsetTop))
                    //     {
                    //         gh_top = gh_top + speedG;
                    //         gh.style.top = gh_top + "px";
                    //     }
                    //     else{
                    //         n[j]=Math.ceil((Math.random()*4));
                    //     }
                    // }
                    // else if(gh_top > parseInt(horizontalBoundary[0].offsetTop)+30)
                    // {
                    //     gh_top = gh_top - speedG;
                    //     gh.style.top = gh_top + "px";
                    // }
                    // else{
                    //     n[j]=Math.ceil((Math.random()*4));
                    // }


                    // if(gh_left > parseInt(horizontalBoundary[2].offsetLeft) && gh_left < parseInt(horizontalBoundary[2].offsetLeft+910))
                    // {
                    //     if(gh_top > parseInt(horizontalBoundary[2].offsetTop)+30)
                    //     {
                    //         gh_top = gh_top - speedG;
                    //         gh.style.top = gh_top + "px";
                    //     }
                    //     else if(gh_top > parseInt(horizontalBoundary[3].offsetTop))
                    //     {
                    //         gh_top = gh_top + speedG;
                    //         gh.style.top = gh_top + "px";
                    //     }
                    //     else{
                    //         n[j]=Math.ceil((Math.random()*4));
                    //     }
                    // }
                    // else if(gh_top > parseInt(horizontalBoundary[0].offsetTop)+30)
                    // {
                    //     gh_top = gh_top - speedG;
                    //     gh.style.top = gh_top + "px";
                    // }
                    // else{
                    //     n[j]=Math.ceil((Math.random()*4));
                    // }
                case 4:
                    if(gh_left > parseInt(horizontalBoundary[3].offsetLeft-10) && gh_left < parseInt(horizontalBoundary[3].offsetLeft+700))
                    {
                        if(gh_left > parseInt(horizontalBoundary[5].offsetLeft) && gh_left < parseInt(horizontalBoundary[5].offsetLeft+300))
                        {
                            if(gh_top < parseInt(horizontalBoundary[5].offsetTop)-60)
                            {
                                gh_top = gh_top + speedG;
                                gh.style.top = gh_top + "px";
                            }
                        }
                        else if(gh_left > parseInt(horizontalBoundary[6].offsetLeft)-60 && gh_left < parseInt(horizontalBoundary[6].offsetLeft+200))
                        {
                            if(gh_top > parseInt(horizontalBoundary[6].offsetTop) && gh_top < parseInt(horizontalBoundary[3].offsetTop)-60)
                            {
                                gh_top = gh_top + speedG;
                                gh.style.top = gh_top + "px";
                            }
                            else{
                                n[j]=Math.ceil((Math.random()*4));
                            }
                        }
                        else if(gh_left > parseInt(horizontalBoundary[7].offsetLeft)-60 && gh_left < parseInt(horizontalBoundary[7].offsetLeft+200))
                        {
                            if(gh_top > parseInt(horizontalBoundary[7].offsetTop) && gh_top < parseInt(horizontalBoundary[3].offsetTop)-60)
                            {
                                gh_top = gh_top + speedG;
                                gh.style.top = gh_top + "px";
                            }
                            else{
                                n[j]=Math.ceil((Math.random()*4));
                            }
                        }
                        else if(gh_top < parseInt(horizontalBoundary[3].offsetTop)-60)
                        {
                            gh_top = gh_top + speedG;
                            gh.style.top = gh_top + "px";
                        }
                        else if(gh_top < parseInt(horizontalBoundary[2].offsetTop))
                        {
                            gh_top = gh_top - speedG;
                            gh.style.top = gh_top + "px";
                        }
                        else{
                            n[j]=Math.ceil((Math.random()*4));
                        }
                    }
                    else if(gh_top < parseInt(horizontalBoundary[1].offsetTop)-60)
                    {
                        gh_top = gh_top + speedG;
                        gh.style.top = gh_top + "px";
                    }
                    else{
                        n[j]=Math.ceil((Math.random()*4));
                    }
                break;






                    // if(gh_left > parseInt(horizontalBoundary[3].offsetLeft-10) && gh_left < parseInt(horizontalBoundary[3].offsetLeft+910))
                    // {
                    //     if(gh_left > parseInt(horizontalBoundary[5].offsetLeft) && gh_left < parseInt(horizontalBoundary[5].offsetLeft+400))
                    //     {
                    //         if(gh_top > parseInt(horizontalBoundary[5].offsetTop)-30)
                    //         {
                    //             gh.style.top = gh_top + "px";
                    //             console.log("Blah 1-1");
                    //         }
                    //         else{
                    //             n[j]=Math.ceil((Math.random()*4));
                    //         }
                    //     }
                    //     else if(gh_top < parseInt(horizontalBoundary[3].offsetTop)-60)
                    //     {
                    //         gh_top = gh_top + speedG;
                    //         gh.style.top = gh_top + "px";
                    //     }
                    //     else if(gh_top < parseInt(horizontalBoundary[2].offsetTop))
                    //     {
                    //         gh_top = gh_top - speedG;
                    //         gh.style.top = gh_top + "px";
                    //     }
                    //     else{
                    //         n[j]=Math.ceil((Math.random()*4));
                    //     }
                    // }
                    // else if(gh_top < parseInt(horizontalBoundary[1].offsetTop)-60)
                    // {
                    //     gh_top = gh_top + speedG;
                    //     gh.style.top = gh_top + "px";
                    // }
                    // else{
                    //     n[j]=Math.ceil((Math.random()*4));
                    // }
                    






                    // if(gh_left > parseInt(horizontalBoundary[3].offsetLeft-10) && gh_left < parseInt(horizontalBoundary[3].offsetLeft+910))
                    // {
                    //     if(gh_top < parseInt(horizontalBoundary[3].offsetTop)-60)
                    //     {
                    //         gh_top = gh_top + speedG;
                    //         gh.style.top = gh_top + "px";
                    //     }
                    //     else if(gh_top < parseInt(horizontalBoundary[2].offsetTop))
                    //     {
                    //         gh_top = gh_top - speedG;
                    //         gh.style.top = gh_top + "px";
                    //     }
                    //     else{
                    //         n[j]=Math.ceil((Math.random()*4));
                    //     }
                    // }
                    // else if(gh_top < parseInt(horizontalBoundary[1].offsetTop)-60)
                    // {
                    //     gh_top = gh_top + speedG;
                    //     gh.style.top = gh_top + "px";
                    // }
                    // else{
                    //     n[j]=Math.ceil((Math.random()*4));
                    // }


            }
        }
        // clearInterval(reset);
    }

};
