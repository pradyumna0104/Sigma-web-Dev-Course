// Javascript Loops
console.log("I am a file on loops")

let a = 1;

//for loop
for (let i = 0; i < 10; i++) {
    console.log(a+i);
}


let obj = {
    name : "Harry" ,
    role : "Programmar" ,
    company : "CodeWithHarry"
}
//for in loop
for (const key in obj) {
    console.log(key);
}

let str = "Harry";
//for of loop
for (const c of str) {
    console.log(c);
}


let x = 5;
//while loop
while(x < 10){
    console.log(x);
    x++;
}

let y =  10;
//do while loop
do{
    console.log(y);
    y++;
}while(y < 15);