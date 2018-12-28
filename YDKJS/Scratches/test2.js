"use strict";
var Student = /** @class */ (function () {
  function Student(firstName, middleInitial, lastName) {
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }

  return Student;
}());

function greeter(person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

var user = new Student('Sam', 'M.', 'Fisher');
console.log(greeter(user));

function test2() {
  console.log('test');
}

test2();
