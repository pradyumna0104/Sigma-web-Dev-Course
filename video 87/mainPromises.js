import fs from "fs/promises"
// console.log(fs);

let a = await fs.readFile("harry2.txt")

let b = await fs.appendFile("harry2.txt","\n\nthis is promise foramt add.")

// console.log(a.toString());//I am a Good boye2.mujhe add karo
console.log(a.toString(),b);