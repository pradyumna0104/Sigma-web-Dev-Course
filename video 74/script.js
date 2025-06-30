let button = document.getElementById("btn");


button.addEventListener("click",()=>{
    // alert("I was Clicked . Yayy!!");

    //not working
    // let boxs = document.getElementsByClassName("box");
    // boxs.innerHTML = "I changed";
    //bcz = "returns an HTMLCollection (like an array of elements), even if there's only one element with class "box"."
    
    //working
    let boxs = document.querySelector(".box");
    boxs.innerHTML = "I changed";
})

document.addEventListener("contextmenu",()=>{
    alert("Don't hack us by right click please");
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key);
    // console.log(e);
})

/*
//List all events (mouse + keyboard + animation + pointer + scroll + touch)
link = "https://developer.mozilla.org/en-US/docs/Web/API/Element#events"
*/

