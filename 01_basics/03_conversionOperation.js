let score = true

// console.log(typeof score);
// console.log(typeof (score)); // as a method

let  valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = " "


let booleanIsLoggedIn = Boolean(isLoggedIn) 
// console.log(booleanIsLoggedIn); 

//  1 => ture; 0 =>false
//  "" => false
// "nitish" => ture

let  someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************************** Operations ***************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3); 

let str1 = "hello"
let str2 = "Nitish"

let str3 = str1 + str2
// console.log (str3);


// console.log("1" + 2);     // 1 is a number and "2" is a string. JavaScript converts the number 1 to a string, and then it concatenates the two strings: "1" + "2", resulting in "12". 
// console.log(1 + "2");
// console.log("1" + 2 + 2);  
// console.log(1 + 2 + "2");  // here 1+2 is added and 3

/*

1.JavaScript uses type coercion when performing operations with different types, like numbers and strings.

2.When adding a string to a number, JavaScript converts the number to a string and concatenates the two.

3.The order of operations matters because it can change when JavaScript performs concatenation or arithmetic.

*/

 

console.log (+true);
console.log (+"")


let num1, num2, num3

num1 = num2 =num3 =2+2;


let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

/*
1.If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing. 

2.If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

*/