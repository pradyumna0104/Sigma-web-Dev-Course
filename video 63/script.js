// let arr = [1,2,4,8,7,5];
// //index    0 1 2 3 4 5

// //array are mutable (can channge)
// arr[1] = 34;
// console.log(arr);
// console.log(typeof(arr));
// console.log(arr.length);
// console.log(arr[4]);
// console.log(arr[1]);



// let arr2  = [1,2,4,8,5,7];

// console.log(arr2.length);//ans = 6
// console.log(arr2.toString());//ans = "2,4,6,1,3,5"
// arr2.pop();
// console.log(arr2);//ans = [ 2, 4, 6, 1, 3 ]

// arr2.push(20);
// arr2.push("Harry");
// console.log(arr2);//[ 2, 4, 6, 1, 3, 20, 'Harry' ]

// console.log(arr2.join("N-"));//2N-4N-6N-1N-3N-20N-Harry

// console.log(arr2.shift());//2 (delete and return first element)
// console.log(arr2);//[ 4, 6, 1, 3, 20, 'Harry' ]

// console.log(arr2.unshift("Code"));//7 (return length) (add at first)
// console.log(arr2);//[ 'Code', 4, 6, 1, 3, 20, 'Harry' ]

// console.log(delete arr2[5]);//true
// console.log(arr2);//[ 'Code', 4, 6, 1, 3, <1 empty item>, 'Harry' ]
// console.log(arr2.length);//7
// console.log(arr2[5]);//undefined


// let arr3 = [101,202];
// let arr4 = [45,56];
// console.log(arr2.concat(arr3,arr4));//it returns a new array doesn't change that array
// console.log(arr2);



let arr6 = [3,6,1,4,6,8,2,0];
arr6.sort();
console.log(arr6);


let arr7 = [1,2,3,4,5,6];
arr7.splice(1,3);//return and delete 3 element strating index form 1
console.log(arr7);// [ 1, 5, 6 ]
arr7.splice(1,1,22,23);
console.log(arr7);//[ 1, 22, 23, 6 ]



let arr8 = [2,4,6,1,3,5,7];
arr8.reverse();
console.log(arr8);//[ 7, 5, 3, 1, 6, 4, 2 ]