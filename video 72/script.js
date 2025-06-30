console.log("working.");

// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children;

console.log(boxes);


function getrandomColor(){

    //for generating bet [0,255] 
    // => Math.random() * (max-min) + min
    // => Math.random() * (255-  0)  + 0
    // => Math.random() * 255

    let val1 = Math.floor(Math.random()*255);
    let val2 = Math.floor(Math.random()*255);
    let val3 = Math.floor(Math.random()*255);

    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getrandomColor()
    e.style.color = getrandomColor()
})