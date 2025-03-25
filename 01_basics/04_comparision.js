// console.log (2 > 1);
// console.log (2 >= 1);
// console.log (2 < 1);
// console.log (2 == 1);
// console.log (2 != 1);


// problem arises when we don't comapre the same data types
//typescript doesn't allow you to compare two different kinds of datatypes

// console.log("2" > 1);
// console.log("02" > 1);


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); // the reason is that an equality check == and comaprision > < > == <= works differently. Comparision converts null to a number, treating it as a 0.that's why (3) null >= 0 is true and (1) null>=0 is false


// console.log (undefined > 0);
// console.log (undefined == 0);
// console.log (undefined < 0);        // avoid these types of cnversion
// console.log (undefined >= 0);

// ===
console.log("2"=== 2);
console.log ("2"== 2)