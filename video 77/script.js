//question 

// function createCard(title, cName, views, monthsOld, duration, thumbnail){
//     // Finish this function
// }


// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")



let view = (views) => {
    if (views > 999 && views < 1000000)
        return (views / 1000) + "K views";
    else if (views > 1000000) {
        return (views / 1000000) + "M views";
    }
    else {
        return views + "views";
    }
}




function CreateCard(title, cName, views, monthsOld, duration, thumbnail) {

    let html = `
    <div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="thumbnail">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h2 class="title">${title}</h2>
            <p>${cName} . ${view(views)} . ${monthsOld} months ago</p>
        </div>
    </div>
    `;

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}



CreateCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "thumb.png");

