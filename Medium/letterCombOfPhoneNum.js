// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]


/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    let res = [], len = digits.length;

    if(len===0){
        return res;
    }

    //map to access the values for each num
    let map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }

    //return result using value as a key
    if(len===1){
        return map[digits[0]];
    }
    
    //
    const helper = function(a1, a2) {
        let comb = [];
        for(let i=0; i<a1.length; i++){
            for(let j=0; j<a2.length; j++){
                comb.push(a1[i]+a2[j]);
            }
        }
        return comb;
    }

    // Initialize the res by combining the arrays for the first two digits using the helper function
    res = helper(map[digits[0]], map[digits[1]])


    //update the result array res by combining it with the array for the current digit
    for(let i=2; i<len; i++){
        res = helper(res, map[digits[i]])
    }

    return res;
};