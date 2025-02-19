'use strict';

//Hoisting in Javascript

//function declarations - are hoisted that is why they are stored in the variable environment object and we can use them before they are declared in the code - they are block scoped in strict mode but they are function scoped without it normally

//var variables - are also hoisted that is why we get undefined when we call them before their declaration in the code, they are function scoped and that is why we don't really use them in modern javascript

//let and const variables - are hoisted but their values are set to <uninitialized>, so they are not hoisted in practical means, if we try to access or call them before they are declared they will <uninitialized>, so we can say these variables are placed in a state of TDZ (Temporal death zone) which makes it so that we can't access these variables between the beginning of the scope and the placed where the variables are declared, these two (let and const) are block scoped.

//function expressions and arrow functions are hoisted, but they are stored in the form of variables in the term of hoisting so same as var if we use these with var or let and const if we use these(function expressions and arrow functions) with them. That is why we cannot use them before the point we did write them in the code.

//now example ->

const myName = 'Saksham';

if (myName == 'Saksham') {
  console.log(`Saksham is a ${job}`);
  //this can't be used and will give this error -> ReferenceError: Cannot access 'job' before initialization
  //it is also in the TDZ for job variable below
  const age = 2024 - 2002;
  console.log(age);
  const job = 'teacher';
  //above it everything in this scope is in it's Temporal Death Zone (TDZ)
  console.log(x);
  //ReferenceError: x is not defined
  //This will be out of TDZ once x is declared
}

//Why TDZ? ->

//Makes it easier to avoid and catch errors: accessing variables before declaration is a bad practice and should be avoided;

//Makes const variables actually work, since we can't reassign them, if can only be assigned when the execution reaches the declaration that makes it impossible to use the variable before.

//Why Hoisting?
//So that we can use functions before actual declaration this is used in some techniques like mutual recursion.
//Some think it makes code more readable
//var hoisting is just a byproduct cause without it hositing couldn't be implemented at that time it was the only way to implement it.
