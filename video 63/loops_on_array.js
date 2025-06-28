let arr = [1, 90, 5, 43, 22];

//classcial loop
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}


//for each loop
//if one value is passed it  treated as value
//if two value is passed it treaed as (value,index) 
//if three value is passed it treaed as (value,index,array) 
arr.forEach((x, y, z) => {
    console.log(x, y, z);
});


let object = {
    a: 1,
    b: 2,
    c: 3
};

//for-in loop
for (const key in object) {
    const element = object[key];
    console.log(key, element);
}

//for-of loop
let arr2 =  [1,31,0,-5,24];
for (const element of arr2) {
    console.log(element);
}