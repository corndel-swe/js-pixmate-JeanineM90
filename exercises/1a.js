// https://tech-docs.corndel.com/js/while-loops.html
// https://tech-docs.corndel.com/js/for-loops.html

/**
 * Adds together all the positive even numbers smaller than or equal to n
 *
 * @example
 * // returns 20 (= 2 + 4 + 6 + 8)
 * addEven(8)
 *
 * @param {number} n - The upper limit
 * @returns {number} The sum of the even numbers smaller than or equal to n
 */
export function addEven(n) {
  // TODO: 
  /*
    Initiate a sum variable
    Count from 1 to n (e.g 8)
    Take each even number
    Add it to a sum
    Return a sum
  */
  let i = 1
  let sum = 0
  while (i <= n) {
    if (i % 2 == 0) {
      sum += i
    }
    i++
  }
  return sum
}

