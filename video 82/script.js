// async function sleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(45);
//         }, 1000);
//     })
// }

// //it is doesn't work (showinng error)
// // let a  = await sleep();
// // console.log(a);
// // let b  = await sleep();
// // console.log(b);


// //IIFE => (Immediately Invoked Function Expression) 
// (semicolon is necessary for IIFE when const function is declared.)

// (async function main() {
//     let a = await sleep();
//     console.log(a);
//     let b = await sleep();
//     console.log(b);
// })()




//      Destructuring 
// let x,y = [1,2]
// console.log(x , y);//for x = undefined and y  = (> (2) [1, 2]) 


// let [x,y] = [1,2]
// console.log(x , y);//1 2

// let [x,y,rest] = [1,2,3,4,5,6];
// console.log(x, y, rest);//for x = 1, y = 2 and rest = 3 and (other's ignored)

// let [x,y,...rest] = [1,2,3,4,5,6];
// console.log(x, y, rest);//for x = 1, y = 2 and rest = (> (4) [3, 4, 5, 6])



// let obj = {
//     a:56,
//     b:47,
//     c:32
// }
// let {a,b} = obj;
// console.log(a, b);//56 47 



//      spread operator
function sum(a,b,c){
    return a+b+c;
}
let arr = [1,2,6];
console.log(sum(arr[0], arr[1], arr[2]));//9
console.log(sum(...arr));//9