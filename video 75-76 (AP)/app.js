// //synchronous execution
// console.log("first"); 
// console.log("second"); 
// console.log("third"); 






// //asynchronous execution
// console.log("first");

// // function second(){
// //     console.log("second");
// // }
// // setTimeout(second,3000);

// //also you can write in once

// setTimeout(() => {
//     console.log("second");
// }, 3000);

// console.log("third");






//              callbacks
//type 1
// function sum(a,b){
//     console.log(`sum = ${a+b}`);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculator(2,3,sum);
//type 2    (same as type 1 only syntax diff.)

// function calculator(a,b,sumcallbacks){
//     sumcallbacks(a,b);
// }

// calculator(2,3,(a,b)=>{
//     console.log(a+b);
// })

// asynchronous
// const hello = () =>{
//     console.log("Say Hello.")
// }

// setTimeout(hello,3000);





//callback hell
// function getdata(data){
//     //2s pause
//     setTimeout(()=>{
//         console.log("data ",data);
//     },2000);
// }

// getdata(1);//after 2s
// getdata(2);//after 2s
// getdata(3);//after 2s
//all are print after 2s 
// (but if we want to print after 2s 1 print and then after 2s 2 print and so on..)

// function getdata(data, nextdata) {
//     //2s pause
//     setTimeout(() => {
//         console.log("data ", data);
//         if (nextdata) {//if exit then only call
//             nextdata()
//         }
//     }, 2000);
// }

// getdata(1, () => {
//     getdata(2, () => {
//         getdata(3);
//     });
// });







//          Promises

// let promise = new Promise((resolve, reject) => { 
//     console.log("I am a Promise");
//     //before resolve define (console window)

//     //  promise
//     //      Promise {<pending>}
//     //          [[Prototype]]: Promise
//     //          [[PromiseState]]: "pending"
//     //          [[PromiseResult]]: undefined


//     //  resolve(123);


//     //after resolve define (console window)

//     // promise
//     //      Promise {<fulfilled>: 123}
//     //          [[Prototype]]: Promise
//     //          [[PromiseState]]: "fulfilled"
//     //          [[PromiseResult]]: 123 

//     // reject("some error");
// })

//real life example
// function getdata(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data ",dataid);
//             resolve("success");
//         },5000);
//     });
// }

// let promiseData = getdata(3);

//before 5s (console window)
// promiseData
//      Promise {<pending>}

//at 5s 
//  data  3

//after 5s
// promiseData
//      Promise {<fulfilled>: 'success'}






//          promise .then() and .catch()

//          .then()

// const getPromise = () => {
//     return new Promise((resolve,reject)=>{
//         console.log("I am Promise");
//         resolve("success");
//     })
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise successfull.",res)
// });


//         .catch()
// const getPromise = () => {
//     return new Promise((resolve,reject)=>{
//         console.log("I am Promise");
//         reject("network error");
//     })
// };

// let promise = getPromise();
// promise.catch((err) => {
//     console.log("Promise rejected.",err);
// });






// //          promise chain
// console.log("fetching Data 1")
// function asynFunction(){
//     return new Promise((resoleve,reject) => {
//         setTimeout(() => {
//             console.log("Get Data  1");
//             resoleve("success");
//         },4000);
//     });
// };



// function asynFunction2(){
//     return new Promise((resoleve,reject) => {
//         setTimeout(() => {
//             console.log("Get Data 2");
//             resoleve("success");
//         },4000);
//     });
// };

// // let promise1 = asynFunction();
// // promise1.then((res) => {
// //     console.log(res);
// //     console.log("fetching Data 2");
// //     let promise2 = asynFunction2();
// //     promise2.then((res) => {
// //         console.log(res);
// //     })
// // })

// //same as above
// asynFunction().then((res) => {
//     console.log(res);
//     console.log("fetching Data 2");
//     asynFunction2().then((res) => {
//         console.log(res);
//     })
// })


//      Async and Await

// async function hello(){
//     console.log("Hello");
// }

// //in console window 
// // hello()
// // Hello
// //  >   Promise {<fulfilled>: undefined}


// async function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Weather Data.");
//             resolve(200);
//         }, 3000);
//     });
// };

// async function GetWeatherData(){
//     await api();//1st 
//     await api();//2nd
// }

// GetWeatherData();


// function getData(dataid){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data",dataid);
//             resolve(2000);
//         }, 2000);
//     })
// }

// async function getAllData(){
//     console.log("Getting data 1...");
//     await getData(1);
//     console.log("Getting data 2...");
//     await getData(2);
//     console.log("Getting data 3...");
//     await getData(3);
// }






//          IIFE
function getData(dataid){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data",dataid);
            resolve(2000);
        }, 2000);
    })
}

(async function(){
    console.log("Getting data 1...");
    await getData(1);
    console.log("Getting data 2...");
    await getData(2);
    console.log("Getting data 3...");
    await getData(3);
})();