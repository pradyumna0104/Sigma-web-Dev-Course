console.log("Harry");

let boxes = document.getElementsByClassName("box");
console.log(boxes);

// //here the 3rd(2nd index) element is color 'coral' but if we insert an an extra box then this then the color is apply to 3rd box from first
// boxes[2].style.backgroundColor = "coral";



//so we can archive by this getElementById
// type 1 (2 lines)
// let reds = document.getElementById("red");
// reds.style.backgroundColor = "coral";

//              or
// type 2 (1 lines)
// document.getElementById("redBox").style.backgroundColor = "coral";




document.querySelector(".box").style.backgroundColor = "green"; //only 1st '.box' is select

//if we want to select all box
// document.querySelectorAll(".box").style.backgroundColor = "green";//not apply bcz it is a html collection not an element

document.querySelectorAll(".box").forEach( e => {
    // console.log(e);
    e.style.backgroundColor = "green";
})

console.log(document.getElementsByTagName("div"));//it returns all div (parent,child,all)


//browser working

// e = document.getElementsByTagName("div")
//      HTMLCollection(7) [div.container, div.box, div.box, div.box, div#redBox.box, div.box, div.box, redBox: div#redBox.box]
// e[4].matches("#redBox")
//      true
// e[4].matches("#redBox")
//      true
// e[3].matches("#redBox")
//      false
// e[3].closest("#redBox")
//      null
// e[3].closest(".container")
//      <div class=​"container">​…​</div>​
// document.querySelector("body").contains(document.querySelector(".box"));
//      true