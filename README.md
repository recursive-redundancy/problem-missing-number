# Code Practice - Find the missing number
The included JavaScript code, MissingNumber.js,  is a solution to a coding practice problem featured on the [leetcode.com](url=http://www.leetcode.com) website.

# Problem #268 (from LeetCode)

## Missing Number
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

## Example 1:

Input: [3,0,1]

Output: 2

## Example 2:

Input: [9,6,4,2,3,5,7,0,1]

Output: 8

## *Note*
Your algorithm should run in linear runtime complexity.

# Solution Explained

Solution makes use of the commonly known mathematical solution for finding the sum of a series of natural numbers from 1 to n, which says: 

> sum = n * (n + 1) / 2

The solution calculates this expected sum, and then iterates the given array (using JavaScript's built-in Array.reduce method) and adds each array element's value to find the sum of the given array.

Once we have both the expected sum and the actual sum, to find the missing number we simply subtract the actual from the expected. The result is the missing number.

This method allows us to accomplish the task in linear time complexity - O(n) as the instructions dictate.