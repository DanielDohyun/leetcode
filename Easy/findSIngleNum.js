// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let arr = nums.sort((a,b) => a-b);


    for (let i = 0; i<arr.length; i+=2) {
        if (arr[i] != arr[i+1]) {
            return arr[i]
        }
    };

    //If the loop completes without finding a single occurrence, it means the single number is the last number in the sorted array. So, after the loop, the code return arr[arr.length-1]; returns the last element of the sorted array, which is the single number.
    return arr[arr.length-1];
};

var singleNumber = function(nums) {
    let c = 0;
    for (let i = 0; i < nums.length; i++) {
        c = c ^ nums[i];
    }
    return c; 
};

// c = c ^ nums[i];: Inside the loop, the current value of c is bitwise XOR-ed with the current number nums[i]. The XOR (^) operation is used here. The key property of XOR is that it returns 1 if the bits being compared are different, and 0 if they are the same. By XOR-ing all the numbers in the array together, the numbers that appear twice will cancel each other out (XOR with itself results in 0), and the number that appears only once will be left in c.

// After the loop, the variable c will hold the value of the number that appears only once in the array.

// return c;: Finally, the function returns the value of c.

// The logic behind this code is based on the properties of the XOR operation. When you XOR two identical numbers, you get 0. When you XOR a number with 0, you get the same number. Since all numbers appear twice except for one, XOR-ing all the numbers in the array will leave only the single number that appeared once. This is a clever and efficient algorithm that doesn't require sorting or additional data structures.