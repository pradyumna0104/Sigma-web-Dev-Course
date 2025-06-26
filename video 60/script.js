// this is a javascript string  file
console.log("This is a Js String files.")


let a = "harry"
console.log(a);
console.log(a[0]);//h
console.log(a[1]);//a
console.log(a[2]);//r
console.log(a[3]);//r
console.log(a[4]);//y
// console.log(a[5]);//undefined
// console.log(a[0] , a[1] , a[2] , a[3] , a[4] , a[5]);// h a r r y undefined

console.log(a.length);//5


//template literals
let realName  = "Harry";
let Friend = "Binod";
console.log("His name is " + realName + " and his friends name is "+ Friend);
console.log(`His name is ${realName} and his friends name is ${Friend}`);


//it is possible to use single and double quotes inside template literals

let ex1 = `My name "is" Ramesh's Sir.`;
console.log(ex1);

//string interpolation <= (inesrt variables directly into template literals)
let obj1 = "apple";
let m  = `This is ${obj1}`;
console.log(m);


//escape sequence
// let name3 = 'Adam D'Angelo'; //throw error
// let name3 = "Adam D"Angelo"; //throw error
// let name3 = 'Adam D"Angelo'; //doesn't throw error
// let name3 = "Adam D'Angelo"; //doesn't throw error
// console.log(name3);

// use [ \ ]
let name3 = 'Adam D\'Angelo';
console.log(name3);



//string properties
let str1 = "Shivam"
console.log(str1.toUpperCase());//SHIVAM
console.log(str1.toLowerCase());//shivam
console.log(str1.length);//6
console.log(str1.slice(2,4));//iv
console.log(str1.slice(2));//ivam

let str2 = "Shivam bhai bhai"
let str3 = str2.replace("bhai","bhau");
let str4 = str2.replaceAll("bhai","bhau");
console.log(str3);//Shivam bhau bhai
console.log(str4);//Shivam bhau bhau


console.log(str1.concat("Bro"));
console.log(str1.concat("Bro","Goat","Real"));

let str5 = "    Harry   ";
console.log(str5.trim());


let str6 = "Rohan";
console.log(str6.indexOf("ha"));//2
console.log(str6.indexOf("z"));//-1
console.log(str6.charAt(1));//o
console.log(str6.charAt(15));//''
console.log(str6.startsWith("Ro"));//true
console.log(str6.startsWith("Roa"));//false
console.log(str6.endsWith("han"));//true
console.log(str6.endsWith("nan"));//false
