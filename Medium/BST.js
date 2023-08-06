// Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

// Example 1:
// Input: n = 3
// Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

// Example 2:
// Input: n = 1
// Output: [[1]]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    const helper = (first, last) => {
       if (first > last)
           return [undefined];
       let tree = [];


       for (let val = first; val <= last; val++){
           //loop to generate all possible left subtrees with values less than the current val
           for (let left of helper(first, val-1)){
           //loop to generate all possible right subtrees with values greater than the current val
               for (let right of helper(val+1, last)){
                   let node = new TreeNode(val,left, right);
                   tree.push(node);
               }
           }
       }
       return tree;
   };
   return helper(1, n);
};