//question 

// function createCard(title, cName, views, monthsOld, duration, thumbnail){
//     // Finish this function
// }


// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")


let view = (views)=>{
    if(views > 999 && views < 1000000)
        return (views/1000) + "K views";
    else if(views > 1000000){
        return (views/1000000) + "M views";
    }
    else{
        return views + "views";
    }
}




function CreateCard(title, cName, views, monthsOld, duration, thumbnail){

    let card = document.createElement("div");
    card.style.display = "flex";
    card.style.alignItems = "center";
    card.style.backgroundColor = "rgb(27,27,27)";
    card.style.padding = "10px";

    //left box 
    let left = document.createElement("div");
    left.setAttribute("class","left");
    left.style.position = "relative";

        //image
        let imag = document.createElement("img");
        imag.src = thumbnail;
        imag.alt = 'thumbnail';
        imag.width = 170;//don't use px 
        imag.position = "absolute";
        left.prepend(imag);

        //duration
        let dur = document.createElement("p");
        dur.innerHTML = duration;
        dur.style.position = "absolute";
        dur.style.bottom = "-6px";
        dur.style.right = "10px";
        dur.style.color = "white";
        dur.style.backgroundColor = "rgba(44, 44, 44, 0.85)";
        dur.style.padding = "1px 3px";
        dur.style.borderRadius = "3px";
        left.append(dur);

    //add left box to card
    card.prepend(left);



    //right box
    let right = document.createElement("div");
    right.setAttribute("class","right");
    right.style.marginLeft = "20px";

        //title
        let titles = document.createElement("h2");
        titles.innerHTML = title;
        //add title to the right box
        titles.style.color = "white";
        right.prepend(titles);
    
        //data
        let data = document.createElement("p");
        let str = cName + " . " + view(views) + " . " + monthsOld + "months ago";
        data.innerHTML = str;
        data.style.color = "white";
        //add data to the right box
        right.append(data);
    
    //add rightbox to card
    card.append(right);
    
    //checking
    // console.log(titles.innerText);
    // console.log(data.innerText);
    // console.log(left.innerHTML);
    // console.log(right.innerHTML);
    // console.log(card.innerHTML);

    return card;
}



let card = CreateCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "thumb.png");

document.querySelector(".container").append(card);
