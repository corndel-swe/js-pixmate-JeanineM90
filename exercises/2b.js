// https://tech-docs.corndel.com/js/loop-control-flow.html

/**
 * Finds the index of the first element in an array that is smaller than the element before it.
 *
 * @example
 * // returns 3
 * stepDown([10, 12, 15, 14, 16, 20])
 * - value 14 is the first in the array that is smaller than the one before it (to the left), the index is 3
 * @example
 * // returns -1 (no element is smaller than its predecessor)
 * stepDown([5, 10, 15, 20])
 *
 * @param {number[]} numbers - An array of numbers to be examined.
 * @returns {number} The index of the first element that is smaller than its predecessor.
 *                   Returns -1 if no such element is found or if the array is empty.
 */
export function stepDown(numbers) {
  /* TODO
    Loop through the array
    For each number, is it smaller than the one before it? If true, we need the index of that value. If false, move on
  */

  for (let i = 1; i < numbers.length; i++) { // doesn't check the first number, skips it 

    if (numbers[i] < numbers[i - 1]) { // if this number is less than the one before it 
      return i // position in the list (index) 
    }
  }
  return -1
}

// 