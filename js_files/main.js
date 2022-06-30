

let array_size= document.querySelector('#arr_sz');
array_size.addEventListener('input', function(){
    console.log(array_size.value, typeof(array_size.value));
    generaterandom_array((array_size.value));
});

// Default input for waitforme function (260ms)

let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

// creating new array 
let array = []; 
generaterandom_array();

function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

function disableSortingBtn()
{
    document.querySelector(".bubbleSort").disabled=true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector(".shellSort").disabled = true;
}

function enableSortingBtn()
{
    document.querySelector(".bubbleSort").disabled=false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector(".shellSort").disabled = false;
}

function enableSizeSlider()
{
    document.querySelector("#arr_sz").disabled=false;
}

function disableSizeSlider()
{
    document.querySelector("#arr_sz").disabled=true;
}

function enableNewArrayBtn()
{
    document.querySelector(".newArray").disabled=false;
}

function disableNewArrayBtn()
{
    document.querySelector(".newArray").disabled=true;
}

function wait(time)
{
    return new Promise(resolve =>{
        setTimeout(()=>{resolve('')},time);
    } )
}
function generaterandom_array(noOfBars = 50) {
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    // console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    // console.log("From newArray " + array_size.value);
    // console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    generaterandom_array(array_size.value);
});