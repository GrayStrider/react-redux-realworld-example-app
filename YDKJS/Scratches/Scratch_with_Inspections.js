'use strict';
/* jshint esversion: 6 */

const MyModules = (function Manager() {
  const modules = {};

  /**
   *
   * @param {string} name
   * @param {array} deps
   * @param {function} impl
   */
  const define = (name, deps, impl) => {
    let i;
    for (i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  };

  /**
   *
   * @param {string} name
   * @return {*}
   */
  const get = (name) => modules[name];

  return {
    define,
    get: get,
  };
})();

MyModules.define('bar', [], function () {
  /**
   *
   * @param {string} who
   * @return {string}
   */
  const hello = function hello(who) {
    return `Let me introduce: ${who}`;
  };

  return {
    hello,
  };
});

MyModules.define('foo', ['bar'], function (bar) {
  const hungry = 'hippo';

  /**
   * Comment
   */
  const awesome = function awesome() {
    console.log(bar.hello(hungry).toUpperCase());
  };

  return {
    awesome: awesome,
  };
});

const bar = MyModules.get('bar');
const foo = MyModules.get('foo');

console.log(
  bar.hello('hippo')
); // Let me introduce: hippo

foo.awesome(); // LET ME INTRODUCE: HIPPO


/**
 * This is comment
 *
 */
function test2() {
  console.log('test');
}

test2();
