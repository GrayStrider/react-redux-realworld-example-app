// @flow

/**
 * type doesn't enforce parameter type when instansiating.
 * Represents a dog.
 * @param {string} breed
 * @param {string} dName Dog's name
 * @constructor
 */
function Dog(breed: string, dName) {
  this.bark = function bark() {
    console.log(`${this.dName} barks! (${this.breed})`);
  };
  this.breed = breed;
  this.dName = dName;
}


const dog1 = new Dog('spaniel', 'Sparky');
dog1.bark();

class Something {
  #property;

  constructor() {
    this.#property = 'test';
  }
}

const instance = new Something();
console.log(instance.property); //= > undefined
