//                  map
//          ---------------------
// let arr = [1, 13, 4, 5, 11];

// //if we want to square each elment ans store it in a new array

// // type 1 (normal jindegi)
// // let newArr = [];

// // for (let i = 0; i < arr.length; i++) {
// //     const element = arr[i];
// //     newArr.push(element**2);//square each element
// // }

// //type 2 (mentos jindegi) 
// let newArr = arr.map(e =>{
//     return e**2;
// });

// console.log(newArr);//[ 1, 169, 16, 25, 121 ]





//              filter
//          ---------------------


// let arr = [1, 13, 4, 5, 11];

// const greaterThanSeven = e => {
//     if(e > 5) return true;
//     return false;
// }

// console.log(arr.filter(greaterThanSeven));
// //we can write the function into that
// console.log(arr.filter(e => {
//     if(e > 5) return true;
//     return false;
// }));






//          reduce
//          ---------------------

//it reduce arr to a single value 

// let arr = [1, 2, 3, 4, 5, 6];

// const mulFun = (a, b) => {
//     return a * b;
// };

// console.log(arr.reduce(mulFun));
// //we can write function inside that
// console.log(arr.reduce((a, b) => { return a * b; }));






//array form
console.log(Array.from("Harry"));