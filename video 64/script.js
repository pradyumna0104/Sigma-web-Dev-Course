// Exercise 10 - Solution
/*
create a business name generator by combining list of adjectives and shop name and another word

adjectives = crazy, amazing, fire
shop name = engine, food, graments
another word = bros, limited, hub
*/

const choose = (a,b,c)=>{
    let x = Math.random()
    if (x < 0.33) return a;
    else if (x > 0.33 && x < 0.66) return b;
    else return c;
}

console.log(choose("Crazy", "Amazing", "Fire") + 
            choose(" Engine", " Food", " Graments") +
            choose(" Bros", " Limited", " Hub") );