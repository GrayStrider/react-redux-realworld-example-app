'use strict';

/* jshint esversion: 6 */


/**
 * --- Upper case name
 * @this identify
 * @return {string}
 * @type {function}
 * @property {string} name
 */
function identify() {
  return this.name.toUpperCase();
}

/**
 * --- Speak
 * @this speak
 */
function speak() {
  const greeting = 'Hello, I\'m ' + identify.call(this);
  console.log(greeting);
}

const me = {
  name: 'Kyle',
};

const you = {
  name: 'Reader',
};

identify.call(me); // KYLE
identify.call(you); // READER

speak.call(me); // Hello, I'm KYLE
speak.call(you); // Hello, I'm READER
