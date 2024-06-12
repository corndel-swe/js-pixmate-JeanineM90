// https://tech-docs.corndel.com/js/loop-control-flow.html

/**
 * Calculates the sum of numbers in an array that are either even or greater than 10,
 * but skips numbers that are both.
 *
 * @example
 * // returns 37
 * sumSelective([1, 4, 12, 15, 20, 5, 8, 10])
 *
 * @param {number[]} numbers - An array of numbers to be processed.
 * @returns {number} The sum of numbers that meet the criteria.
 */
export function sumSelective(numbers) {
  /* TODO:
    -- sum even numbers up until and over 10
    -- with numbers that are over 10
    -- use "continue" to skip numbers that are both, e.g 12 is even and over 10 so it would be skipped, but 8 would return as it's even and under 10. 
    -- It would also include 15 as it's over 10
    -- return results of sum 
  */

  // remember: i is the number of loop you're on - the index in the array

  let result = 0

  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2 === 0) || (numbers[i] > 10)) { // OR operator (||) returns true if at least one of the operands is true; otherwise, it returns false
      continue
    } else if ((numbers[i] % 2 === 0) && (numbers[i] > 10)) { //AND operator (&&) returns true if both operands are true; otherwise, it returns false
      result += numbers[i]
    }
  }

  return result
}


let answer = sumSelective([1, 4, 12, 15, 20, 5, 8, 10])
console.log(answer)

// sum even numbers, or any number greater than ten - you've seen sum today used in question 1a which also wanted even numbers only
// skip numbers that are both
// in this example, it would the return the sum of 4, 8 & 15 (27) - should this include 10?

// continue - use this to skip (e.g spam filter not allowing emails to go into inbox)
// break- stops the loop: search for one thing, then stop after you've found it 

