// this ia a file on javascript function

// console.log("Hey Harry you are nice");
// console.log("Hey Harry you are good");
// console.log("Hey Harry your shirt is nice");
// console.log("Hey Harry your course is good too");

//but what happen when i used all that for a other person to,so function comes into picture

function tarif(name) {
    console.log("Hey " + name + " you are nice");
    console.log("Hey " + name + " you are good");
    console.log("Hey " + name + " your shirt is nice");
    console.log("Hey " + name + " your course is good too");
}

// tarif("Harry");
// tarif("Harish");

function sum(a,b){
    console.log(a+b);
}

// sum(2,8);

function sumReturn(a,b,c=3){//'c=3' is optional parameter
    return a + b + c;
}

result = sumReturn(8,9);
result1 = sumReturn(8,9,1);
// console.log("sum of these nummber is = ",result);
// console.log("sum of these nummber is = ",result1);


//arrow function

const func1 = (x) => {
    console.log("I am an arrow function.",x);
}

func1(23);
func1("Chinji");