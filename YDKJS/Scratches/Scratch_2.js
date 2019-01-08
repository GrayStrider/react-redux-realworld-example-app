/** @flow
 * Rectangle
 *
 */
class Rectangle {
  #rHeight;

  /**
   *
   * @param {int} height Private
   * @param {int} width
   */
  constructor(height, width) {
    this.#rHeight = height;
    this.rWidth = width;
  }

  /**
   *
   * @return {*} Area
   */
  get area() {
    return this.calcArea();
  }

  /**
   *
   * @return {number} Calculates area
   */
  calcArea() {
    return this.#rHeight * this.rWidth;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100

const square2 = new Rectangle(10, 10);
console.log(square2.rHeight); // unresolved, since private
console.log(square2.rWidth);

console.log(square2.area);
