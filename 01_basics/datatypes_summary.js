// Primitive DataType

// 7types: String, Number, Boolean, null, Undefined, Symbol(to make any value unique), BigInt, 

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123');

// console.log (id == anotherId);


const bigNumer = 62027980n


// JS is a Dynamically-Typed Language.

// Non-Primitive (Reference Type)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] //array

let myObj = {
    name: "nitish",
    age: 22,
}                   //object

const myFunction =function(){
    // console.log ("hello world");
}                                       //function



console.log (typeof bigNumer);
console.log (typeof outSideTemp)
console.log(typeof myFunction);





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap (Non-Primitive)

let myYoutubename ="NitishPandeydotcom"

let anotherName = myYoutubename
anotherName = "chai aur code"

console.log (myYoutubename);
console.log (anotherName); 

let userOne = {
    email: "user@google.com",
    upi : " user@ybl"

}


let userTwo = userOne


userTwo.email = "nitish@google.com"

console.log(userOne.email);
console.log(userTwo.email);


// primitive (stack)   we get copy of the value 
// non-primitive (heap) here we get refrence of the value

 

