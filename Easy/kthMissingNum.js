// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Return the kth positive integer that is missing from this array.

 

// Example 1:

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
// Example 2:

// Input: arr = [1,2,3,4], k = 2
// Output: 6
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    // const resultArr = Array.from({length: arr[arr.length-1]}, (_, i) => i + 1)

    const resultArr = Array(arr[arr.length-1]).fill().map((_, i) => i+1);
    let count = 1;

    for (const num of arr) {
        const index = resultArr.indexOf(num) 

        if ( num != -1) {
            resultArr.splice(index, 1);

        }
    }

    while (resultArr.length < k) {
        resultArr.push(arr[arr.length-1] + count);
        count += 1;
    }

    return resultArr.length > 4 ? resultArr[k-1] : resultArr[resultArr.length-1]
};