//  create a hacking simulator which has green font and black bg and this shows this message randomly between 1 to 7s 
//     Initializing Hacking...
//     Readinng Your Files...
//     Password files Detected...
//     Sending all passwords ansd personal files to server...
//     Cleaning up...
//     these three dots must blick so that it look like real terminal
//---------------------------------------------------------------------------------------------------

//1st design 3 blick dot
function Threedot() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector(".window").innerHTML += `    .`;
        }, 500);
        setTimeout(() => {
            document.querySelector(".window").innerHTML += `    .`;
        }, 2000);
        setTimeout(() => {
            document.querySelector(".window").innerHTML += `    .<br><br>`;
            resolve(200);
        }, 3000);
    })
}



function printSome(str) {
    //let random time between 1s to 7s
    let rand = Math.floor(Math.random() * 7) * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(str);
            document.querySelector(".window").innerHTML += `${str}`;
            resolve(200);
        }, rand);
        // console.log(rand);
    })
}

function Success(){
    document.querySelector(".window").innerHTML += 
    `<pre>
------------------------------------------
|                                        |
|      Hacking Successfully..            |
|                                        |
------------------------------------------
    </pre>`;
}


(async function() {
    await printSome("Initializing Hacking"); await Threedot();
    await printSome("Readinng Your Files"); await Threedot();
    await printSome("Password files Detected"); await Threedot();
    await printSome("Sending all passwords ansd personal files to server"); await Threedot();
    await printSome("Cleaning up"); await Threedot();
    Success();
})();


