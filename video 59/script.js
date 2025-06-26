//exercise 9 - create a faulty calculator

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

let a = Math.random() ;//it generate between 0 to 1

function sum(x,y){
    if(a  < 0.1) return x-y;
    else return x+y;
}
function sub(x,y){
    if(a  < 0.1) return x*y;
    else return x-y;
}
function mul(x,y){
    if(a  < 0.1) return x/y;
    else return x*y;
}
function div(x,y){
    if(a  < 0.1) return x**y;
    else return x/y;
}
function expo(x,y){
    if(a  < 0.1) return x+y;
    else return x**y;
}

console.log(sum(2,3));
console.log(mul(2,3));