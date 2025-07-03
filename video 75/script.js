//asynchronous nature of JS 
console.log("harry is a Hacker");
console.log("Rohan is a Hecker");

setTimeout(() => {
    console.log("I am inside set Timeout.")
},0);
setTimeout(() => {
    console.log("I am inside set Timeout 2.")
},0);
console.log("The End");

// o/p =    harry is a Hacker
 //         Rohan is a Hecker 
//          The End
//          I am inside set Timeout.
//          I am inside set Timeout 2.