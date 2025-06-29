// Exercise 11:solution (factorial)

let a = 6;

function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    // let c = arr.slice(1,).reduce((a,b)=>{   return a*b })
    let c = arr.slice(1,).reduce((a,b)=>a*b ) //shortcut of arrow function
    console.log(`factorial = ${c}`)
}

factorial(a);