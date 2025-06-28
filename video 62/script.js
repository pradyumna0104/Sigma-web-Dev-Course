// Exercise 10 - Business Name Generator
/*
create a business name generator by combining list of adjectives and shop name and another word

adjectives = crazy, amazing, fire
shop name = engine, food, graments
another word = bros, limited, hub
*/
function choose(a,b,c){
    let random  = Math.random();
    if(random < 0.33) return a;
    else if(random < 0.66) return b;
    else return c;
}

let Business_name = choose("Crazy","Amazing","Fire") + 
                    choose("_Engine","_Food","_Garments") +
                    choose("@Bros","@Limited","@Hub");

console.log(`the Business name is : ${Business_name}`);