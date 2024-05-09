// console.log( 2 > 1); // ture
// console.log( 2 >= 1); // true 
// console.log( 2 < 1); // false
// console.log( 2 == 1); // false
// console.log( 2 != 1);  // true


// console.log(null > 0);  // false
// console.log(null == 0);   // false 
// console.log(null >= 0);   // true


/*   The reason is that an equality check == and comaprisons > < >=
<=  work diffrently
comparisons convert null to anumber , treating it as 0
That's why (3)  null >= 0 is true (1) null > 0 is false   */


// console.log(undefined == 0);  // false
// console.log(undefined > 0);    // false
// console.log(undefined < 0);    // false

// strict check ===   check values as well as data type

console.log('2' === 2);   // false