// https://tech-docs.corndel.com/js/for-of-loops.html

/**
 * Adds together all the numbers in the array
 *
 * @example
 * // returns 11
 * sumArray([1, 3, 7])
 *
 * @param {number[]} arr - An array of numbers
 * @returns {number} The sum of the array
 */
export function sumArray(arr) {
  // TODO:
  /*
  - sum the values in arr (the array of numbers)
  - return result
  
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
    this used sum istead 
*/

  let result = 0

  for (let i = 0; i < arr.length; i++) {
    result += arr[i] // one of the numbers in the array e.g arr[2] is the 3rd number in the array - the value of this depends on where you are in the loop (which stage of the loop e.g first round)
  }

  return result

}

//what ia arr:
const whatIs = sumArray([1, 3, 7])
console.log(whatIs)

// loop through array in "for loop" tech doc, then use sum (used in 1a)
// this doc also has an example for accumulating a value e.g add all the odd numbers less than 100 


