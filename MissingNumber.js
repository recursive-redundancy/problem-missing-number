/**
 * Finds the missing number from an array of integer numbers in O(n) time
 * @param {Array} arr - Array to find missing number from
 * @returns {Number} - An integer value that is missing from arr
 */
function findMissingNum(arr) {
  let n = arr.length;
  let fullSum = n * (n + 1) / 2;
  let sum = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return (fullSum - sum);
}

module.exports = findMissingNum;