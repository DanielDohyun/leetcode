// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let res = 0;
    
    if (!nums.includes(target)) {
        nums.push(target);
        nums.sort(function(a,b){return a-b});
    }

    res = nums.indexOf(target);
    return res
};

var searchInsert = function(nums, target) {
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        let cur = nums[i];
        if (cur >= target) {
            return i;
        };
    };
    return length;
};
