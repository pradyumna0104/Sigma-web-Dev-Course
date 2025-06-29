// Exercise 11 - Factorial Calculator using reduce and using for loops

//using for loops
let fact =  (n) => {
    let ans = 1;
    for(let i = 1;i<=n;i++)
        ans *= i;
    return ans;
}

console.log(`factorial is = ${fact(10)}.`);

//using reduce 

const multi = (a,b) => {
    return a*b;
}

let fact2 = (n) => {
    let arr = [];
    for(let i =1;i<=n;i++){
        arr.push(i);
    }
    return (arr.reduce(multi));
}

console.log(`factorial is = ${fact2(10)}.`);