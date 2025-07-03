const URL = "https://poetrydb.org/title/Ozymandias/lines";



// const getFacts = async () =>{
//     console.log("Getting Data...");
//     let promise = await fetch(URL);//JSON format
//     console.log(promise);
//     console.log(promise.status);
//     let data = await promise.json();//usable data //it retuen 14 quote
//     console.log(data);//to check where the info.
//     console.log(data[0].lines[0]);//lines[0] to lines[13]
// };


//if we want to create a quote generator

let quotePara = document.getElementById("quotePara");
let btn = document.getElementById("quoteButton");

const getFacts = async () =>{
    console.log("Getting Data...");
    let promise = await fetch(URL);//JSON format
    let data = await promise.json();//usable data //it retuen 14 quote
        console.log(data);//to check where the info.
    // from data[0].lines[0] to data[0].lines[13]
    quotePara.innerText = data[0].lines[7];
};

btn.addEventListener("click",getFacts);
