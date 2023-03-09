/**
 * @param {number} a
 * @param {number} b
 * @returns {number} returns the sum of a and b
 */
const addition = (a, b) => a + b;

/**
 * @param {number} a
 * @param {number} b
 * @returns {number} returns the difference of a and b
 */
const subtraction = (a, b) => a - b;

/**
 * @param {number} a
 * @param {number} b
 * @returns {number} returns the product of a and b
 */
const multiplication = (a, b) => a * b;

/**
 * @param {number} a
 * @param {number} b
 * @returns {number} returns the division of a and b
 */
const division = (a, b) => a / b;

/**
 * @param {number} a
 * @param {number} b
 * @returns {number} return the remainder of a and b
 */
const modulus = (a, b) => a % b;

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulus,
};