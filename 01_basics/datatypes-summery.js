// // # Primitive data types

// // 7 types : String , Number , Boolean , null  , undefined , Symbol , BigInt

// const score = 100
// const scorevalue = 100.3

// const isloggedIn = false 

// const outsideTemp = null

// let userEmail;


// const id = Symbol('123')

// const anotherId = Symbol('123')

// console.log(id === anotherId);  // false 

// const bigNumber = 234586588984895988n;
 


// // # Refrence type or Non Primitive

// // Array , Objects , Functions

// // Array  
// const heros = ['Shaktiman','Nagu', 'Dog'] ;

// // Object 
// let myObj = {
//     name : 'Aditya',
//     age : 22,
// }

// // Function

// const myFunction = function(){
//     console.log('Hello World');
// }

// console.log( typeof myFunction );


// **********************************************************\

// Stack (Primitive) when we declared any variable  we get copy of it

// Heap (Non-Primitive) we get refrence of original value i.e if we did any change then original value also get change


let myYoutube = 'Aditya'

let anotherName = myYoutube
// here we get copy 
console.log(anotherName);



let userOne = {
    email : 'adiya@gmail.com',
    upi : ' user@ybl'
}

let userTwo =  userOne

userTwo.email = ' adi@gmail.com'

console.log(userOne.email);
console.log(userTwo.email);