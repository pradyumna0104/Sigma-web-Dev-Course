console.log("this is video ");

var a = 5;
var b = 6;
var c = "Harry";
// var _d = "Subham"; //valid  
// var 67d = "Gobind"; //not - valid  

console.log(a + b);//11

console.log(typeof a,typeof b,typeof c);//number number string


{
    // console.log(a); //reference error : Cannot access 'a' before initialization
    let a = 12;
    console.log(a);
}
console.log(a);


const a1 = 34;
// a1 = a1 + 2; // not allowed


//all primitive data types
let i = "Harry Bhai";   //string
let j = 22;             //number
let k = 3.1415;         //number
const l = true;         //boolean
let m = undefined;      //undefined
let n = null;           //object (why ? -> interview question)

console.log(i, j ,k ,l ,m ,n );
console.log(typeof i, typeof j ,typeof k ,typeof l ,typeof m ,typeof n);



// objects
let obj1 = {
    name            : "Haarry" ,//you can use "name" also
    "job code"      : 5600     ,//if space in naming use this " "
    "is handsome"   : true
}

console.log(obj1);

//we can add element to this also
obj1.salary = "100Coroes";
console.log(obj1);

//we can alter(change) also
obj1.salary = "500Coroes";
console.log(obj1);