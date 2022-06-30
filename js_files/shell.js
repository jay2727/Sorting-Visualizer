async function shell(){
    const ele = document.querySelectorAll(".bar");
    let n = parseInt(ele.length); 
    let gap, i, j;
    console.log(ele.length);

    for(gap = Math.floor(n/2); gap>0 ; gap = Math.floor(gap/2))
    {
        for(j=gap; j<n; ++j)
        {
            for(i=j-gap; i>=0; i-=gap)
            {
                ele[i].style.background = 'orange';
                ele[i+gap].style.background = 'orange';
                await wait(delay);

                if(parseInt(ele[i].style.height) < parseInt(ele[i+gap].style.height))
                {
                    ele[i].style.background = 'pink';
                    ele[i+gap].style.background = 'red';
                    await wait(delay);
                    break;
                }
                else
                {
                    await wait(delay);
                    swap(ele[i], ele[i+gap]);
                    ele[i].style.background = 'red';
                    ele[i+gap].style.background = 'pink';
                }
            }
        }
        if(gap > 1)
        {
            for(let i=0; i<n; ++i)
            {
                ele[i].style.background = 'cyan';
                await wait(parseInt(Math.floor(delay/6)));
            }
        }
    }
    for(let i=0;i<n;++i)
    {
        ele[i].style.background = 'green';
        await wait(parseInt(Math.floor(delay/4)));
    }

    
}

const shellSortbtn = document.querySelector(".shellSort");
shellSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await shell();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});