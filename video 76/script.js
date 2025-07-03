// /* 
// // Example 1: Using Promises (without handling the resolved value properly)

// // Simulates asynchronous data fetching
// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(440); // Return a dummy value after 3 seconds
//         }, 3000);
//     })
// }

// console.log("Loading Modules");
// console.log("Loading something else");
// console.log("Loading Data");

// // getData() returns a Promise, but the code below doesn't wait for it
// let data = getData();
// console.log(data); // Logs: Promise { <pending> }

// console.log("Process Data"); // Runs before the Promise resolves
// console.log("data 2");       // Execution continues immediately
// */







// /* 
// // Example 2: Properly handling the Promise using `.then`

// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(440); // Return a dummy value after 3 seconds
//         }, 3000);
//     })
// }

// console.log("Loading Modules");
// console.log("Loading something else");
// console.log("Loading Data");

// let data = getData(); // Still returns a Promise

// // Properly handling the resolved value using .then()
// data.then((result)=>{
//     console.log(result);         // Logs resolved value: 440
//     console.log("Process Data"); 
//     console.log("data 2");       
// });
// */




// // Example 3: Using async/await for cleaner asynchronous code

// // Simulates an asynchronous operation that resolves after 3 seconds
// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(440); // Return a dummy value after delay
//         }, 3000);
//     });
// }

// async function main() {
//     console.log("Loading Modules");
//     console.log("Loading something else");
//     console.log("Loading Data");

//     // Waits for getData() to complete before continuing
//     let data = await getData();

//     console.log(data);            // Logs resolved value: 440
//     console.log("Process Data");  // Continues only after data is received
//     console.log("data 2");
// }

// // Starts the asynchronous flow
// main();






//              API
async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await x.json();
    return data;
}
async function main(){
    console.log("work 1");
    console.log("loading data...");
    let data = await getData();
    console.log(data);
    console.log("work 2");
}
main()