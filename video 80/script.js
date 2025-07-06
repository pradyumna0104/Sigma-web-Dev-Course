// let obj = {
//     a:1,
//     b:"Harry"
// }
// console.log(obj);

// let animal = {
//     eats:true
// }

// let rabbit = {
//     jumps: true 
// }
// //rabbit is also a animal
// rabbit.__proto__ = animal;//set rabbit.[[prototype]] = animal;
// console.log(rabbit.eats);




// class Animal{
//     constructor(){
//         console.log("Object is Created...")
//     }
//     eats(){
//         console.log("Kha raha hoon")
//     }
//     jumps(){
//         console.log("Kood raha hoon")
//     }
// }

// let a = new Animal();

// console.log(a);
// console.log(a.eats());
// console.log(a.jumps());




// class Animal{
//     constructor(name){
//         this.name = name;
//         console.log("Object is Created...")
//     }
//     eats(){
//         console.log("Kha raha hoon")
//     }
//     jumps(){
//         console.log("Kood raha hoon")
//     }
// }

// let a = new Animal("Bunny");

// console.log(a);
// console.log(a.name);
// console.log(a.eats());
// console.log(a.jumps());



class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is Created...")
    }
    eats(){
        console.log("Kha raha hoon")
    }
    jumps(){
        console.log("Kood raha hoon")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name);//mandatory (used only derived class constructor is called)
        console.log("lion object is created...")
    }

    eats(){
        super.eats()
        console.log("Kha raha hoon Lion");
    }
}

let l = new Lion("Shera");
console.log(l instanceof Lion);//true
console.log(l instanceof Animal);//true

