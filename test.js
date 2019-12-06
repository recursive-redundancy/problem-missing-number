/**
 * Unit test for Missing Number Solution
 */

const findMissingNum = require('./MissingNumber');

/**
 * set of arrays to test
 */
let tests = [
  {
    arr: [3,0,1],
    soln: 2
  },
  {
    arr: [9,6,4,2,3,5,7,0,1],
    soln: 8
  }
];

/** run solnLinearTime on each test array */
tests.forEach((test) => {
  console.log('running test on: ' + test.arr);
  let result = findMissingNum(test.arr);
  console.log('expected=' + test.soln);
  console.log('result=' + result);
  if (test.soln == result) {
    console.log('***SUCCESS***');
  }
  else {
    console.log('***FAILURE***');
  }
  console.log('-----------------')
})