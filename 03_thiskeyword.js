'use strict';

//this keyword/variable - special variable created for every education context (every function), takes the value of points to the "owner" of the function in which this keyword is used
//this is NOT static. It depends on how function is called and it's value is only assigned when the function is actually called

//method -> this = <Object that is calling the method>
//simple function call -> this = undefined (in strict mode in regular mode it will point to the window object which isn't really a good thing)
//Arrow functions -> this = <this of surrounding function(lexical this)>
//Event listener -> this = <DOM element that the handler is attached to>

//this does NOT point to the function itself and also NOT its variable environment!

//console.log(this);

const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  //console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  //console.log(this);
};
calcAgeArrow(1980);

//it will use the this keyword of it's parent function or parent scope (lexical this) that is the window keyword

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
};
jonas.calcAge();
//this keyword will point to jonas object i.e. the owner of the data

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();
//this keyword always point to the object that is calling the method so it will point to matilda even if it's written in jonas object but matilda called it so it will point to matilda

const f = jonas.calcAge;
f();
//this f function is now a regular function call without any owner or object
//will throw error - TypeError: Cannot read properties of undefined (reading 'year')
