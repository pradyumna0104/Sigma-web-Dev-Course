// let a = prompt("Enter 1st number");
// let b = prompt("Enter 2nd number");

// //if error throw at this moment script is pause
// if(isNaN(a) || isNaN(b)){
//     throw SyntaxError("Sorry this is not allowed.");
// }

// let sum = parseInt(a) + parseInt(b);

// alert(`The sum is : ${sum}`);




// let a = prompt("Enter 1st number");
// let b = prompt("Enter 2nd number");

// //if error throw at this moment script is pause
// if(isNaN(a) || isNaN(b)){
//     throw SyntaxError("Sorry this is not allowed.");
// }

// let sum = parseInt(a) + parseInt(b);

// try {
//     //x is not define throw an error but catch is there for its handle
//     console.log("the sum is ",sum*x);
// } catch (error) {
//     console.log("error aa gaya bhai");
// }





let a = prompt("Enter 1st number");
let b = prompt("Enter 2nd number");

//if error throw at this moment script is pause
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed.");
}

let sum = parseInt(a) + parseInt(b);

try {
    //x is not define throw an error but catch is there for its handle
    console.log("the sum is ",sum*x);
} catch (error) {
    console.log("error aa gaya bhai");
} finally {
    //finally used inside function when try and catch both have return statement and we want to execute a message atlast at any cost
    console.log("files are colsed . Game is over.");
}