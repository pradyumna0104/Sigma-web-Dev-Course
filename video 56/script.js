// JavaScript Conditionals: if, else if, else laddar


// console.log("Hello I am Conditional Tutorials");

let age = 45;
let grace = 3;

// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace);//exponential op
// console.log(age % grace);

age = 1;

if (age > 18) {
    console.log("You can Drive.");
}
else if (age == 0) {
    console.log("Are you Kidding.");
}
else if (age == 1) {
    console.log("Are you again Kidding.");
}
else {
    console.log("You cann't Drive.");
}

// console.log("3" == 3);//true
// console.log("3" === 3);//false

//ternary operator
let a = 10, b = 24
let c = a > b ? (a-b) : (b-a);
console.log(c);