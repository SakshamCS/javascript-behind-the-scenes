'use strict';

const calcAge = function (birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //creating new variable with same name as outer scopes variable.
      const firstName = 'Steven';

      //Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh and you're a millenial, ${firstName}`;
      console.log(str);
      //output - Oh and you're a millenial, Steven
      //cause Javascript looks first in current scope
      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str);
    // we get an error that str is not defined. And again, that's because const and let variables are block scoped.
    console.log(millenial);
    // that var variables, so variables declared with the var keyword are function scoped. So they simply ignore the block, because they are not block scoped at all.

    //And so therefore, we can then access the millennial variable inside of its scope.

    // console.log(add(2, 3));
    //functions are only block scoped in strict mode remove it and this will work.
    console.log(output);
  }
  printAge();
  return age;
};

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
// scope will never ever have access to the variables of an inner scope, only of outer scopes.

//in the global scope, we do not have access to any variables defined in any other scope.
