const name = "Aditya "

const Age = 27

// console.log(name  + Age + " Value");  old style

console.log(`Hello my name is ${name} and my age is ${Age}`);


const gameName  = new String('Aditya')

console.log(gameName);
console.log(gameName[1]);
//console.log(gameName.__Proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('d'));

const newString =  gameName.substring(0,3)
console.log(newString);


const anotherString  =  gameName.slice(-8,4)
console.log(anotherString);

const newStringone = "     Aditya     "

console.log(newStringone);
console.log(newStringone.trim());

const url = " https://adictya.com/adit%20kalaskar"

console.log(url.replace('%20','-'));

console.log(url.includes("AGK"))