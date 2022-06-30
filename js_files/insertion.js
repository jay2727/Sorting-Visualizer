async function insertion(){
    // console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = 'orange';
    for(let i = 1; i < ele.length; i++){
        // console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = 'cyan';

        await wait(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            // console.log('In while loop');
            ele[j].style.background = 'cyan';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await wait(delay);

            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'orange';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = 'orange';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    console.log("Inside Insertion Sort");
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

