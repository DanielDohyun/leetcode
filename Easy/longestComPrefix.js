

// .some vs .every vs forEach
// The some() method stops iterating as soon as the element is found, which satisfies the required boolean expression.

// arr.some((value) => { 
//     index++;
//     console.log(index); 
//     return (value % 2 == 0); 
// });


// As opposed to some(), the every() method checks whether the elements in the array satisfy the boolean expression. If even a single value doesn't satisfy the element it returns false, otherwise it returns true.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.every((value)=> { 
//     return (value > 0); 
// });

// The forEach() method, as the name suggests, is used to iterate over every element of the array and perform a desired operation with it.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.forEach((value) => { 
//     console.log(value == 5); 
// });


// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    if(!strs.length) return ''

    let res = '';

    for(let i=0; i< strs[0].length; i++) {
        
        let char = strs[0][i];
        if(!char) return ''
        //every returns fails if any element does not satisfy the condition. so here use every instead of forEach 
        //true meaning all the elements contain same prefix
        if(strs.every(str => str[i] === char)) {
            //rmb you can just add string 
            res+=char;
        } else break
    };

    return res;
};