// console.log("Working with Files : FS and Path Modules");

const fs = require("fs");


//          FS modules
//      ----------------------
// console.log(fs);


//          Creating a File
//      ----------------------

// console.log("starting...")
// fs.writeFileSync("harry.txt","I am a Good boye.");
// console.log("ending..");
//op -  starting...
//      ending..




// console.log("starting...")
// fs.writeFile("harry2.txt","I am a Good boye2.",()=>{
    // console.log("done");
// });
// console.log("ending..");
// op - starting...
//      ending..
//      done



//          Reading From a File
//      ----------------------------

// console.log("starting...")
// fs.writeFile("harry2.txt","I am a Good boye2.",()=>{
//     console.log("done");
//     fs.readFile("harry2.txt",(error,data)=>{
//         // console.log(error ,data);//null <Buffer 49 20 61 6d 20 61 20 47 6f 6f 64 20 62 6f 79 65 32 2e>
//         console.log(error ,data.toString());//null I am a Good boye2.
//     })
// });
// console.log("ending..");

//imp*** This format can lead into callback hell. so use "fs/promises"




//          Append to a File
//      ----------------------------
fs.appendFile("harry2.txt","mujhe add karo",(error,data)=>{});