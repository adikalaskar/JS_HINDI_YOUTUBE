// Arrays

const myArr = [0,1,2,3,4,5]

const myHeros = ["Aditya","Visjhal"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[2]);


// Array Methods

myArr.push(6) // to add element in last
myArr.push(6)
//console.log(myArr);
 
myArr.pop()   // to remove last index element 
//console.log(myArr);

// myArr.unshift(10)    // to add index element in the start position
// console.log(myArr);

// myArr.shift()   // remove first element
// console.log(myArr);


// console.log(myArr.includes(9));   // to check 9 is present or not 

// console.log(myArr.indexOf(3)); // to find the index of that perticular no.
// but if no. is not present it will give -1

const newArr =  myArr.join()
/* join() is used to add all element of an array into a string,
Seperated by specified seperator string
*/



// console.log(myArr);  //[0,1,2,3,4,5]
// console.log(typeof myArr);// object

// console.log(newArr); // 0,1,2,3,4,5
// console.log(typeof newArr); // string

// slice , splice

console.log("A ", myArr);  // A [0,1,2,3,4,5]

const myn1 = myArr.slice(1,3) // returns a copy of section of array  
// start from index 1 and exclude or dont consider 3 or upto 3rd index

console.log(myn1);  // [1,2]

console.log("B ", myArr);  // B [0,1,2,3,4,5]

const myn2 = myArr.splice(1,3)  // Splice is used tomanupulate the element
console.log("C ",myn1);

console.log(myn2);


