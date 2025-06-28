//Exercise 9 solution (Faulty Calcultor)
/*
Problem statement:-
create a fulty calculator using java script

this faulty calculator does following,
    1.it takes 2 number as input from the user
    2.it performs wrong operation aas follows
        +  ---> -
        -  ---> *
        *  ---> /
        /  ---> **
        ** ---> +

    3. it only performs wrong operation this 10% of times
*/

let random = Math.random();

console.log(random);

let a = prompt("Enter the first number : ");
let op = prompt("Enter the operator : ");
let b = prompt("Enter the Second number : ");

let obj = {
    "+" : "-" , 
    "-" : "*" , 
    "*" : "/" , 
    "/" : "**" , 
    "**" : "+" 
}

if(random > 0.1){
    console.log(`the operation is ${a} ${op} ${b}`)
    alert(`the result is ${eval(`${a} ${op} ${b}`)}`);
}
else{
    op = obj[op]
    console.log(`the operation is ${a} ${op} ${b}`)
    alert(`the result is ${eval(`${a} ${op} ${b}`)}`);
}