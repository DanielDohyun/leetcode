// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};
    for (let i = 0; i< nums.length; i++) {
        if (map[nums[i]] != undefined) {
            map[nums[i]] =  map[nums[i]]+1;
        }  else {
            map[nums[i]] = 1;
        }
    }

    const majority = Object.keys(map).reduce((a,b) => map[a] > map[b] ? a : b );
    return majority;
};

var majorityElement = function(nums) {
  const n = nums.length;
  const majority = Math.floor(n / 2);
  let buckets = {};

  // quick checks
  if (n <= 2) { return nums[0]; }

  for (let i = 0; i < n; i++) {
    //if its undefined set it as 0 
    buckets[nums[i]] = buckets[nums[i]] || 0;
    buckets[nums[i]]++;
    if (buckets[nums[i]] > majority) {
      return nums[i];
    }
  }
};