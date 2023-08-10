// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // n = 4, Output: 5
    // 1 step + 1 step + 1 step + 1 step
    // 1 step + 1 step + 2 steps
    // 1 step + 2 steps + 1 step
    // 2 steps + 1 step + 1 step
    // 2 steps + 2 steps
    // On a closer look, we can see that these 5 ways are actually:
    
    // 1 step + (1st case of n = 3)
    // 1 step + (2nd case of n = 3)
    // 1 step + (3rd case of n = 3)
    // 2 steps + (1st case of n = 2)
    // 2 steps + (2nd case of n = 2)
    // i.e. the output is: (Output for n = 3) + (Output for n = 2)
    
    // n = 5, Output: 8
    // 1 step + 1 step + 1 step + 1 step + 1 step
    // 1 step + 1 step + 1 step + 2 steps
    // 1 step + 1 step + 2 steps + 1 step
    // 1 step + 2 steps + 1 step + 1 step
    // 1 step + 2 steps + 2 steps
    // 2 steps + 1 step + 1 step + 1 step
    // 2 steps + 1 step + 2 steps
    // 2 steps + 2 steps + 1 step
    // Similarly again, we can see that these 8 ways are actually:
    
    // 1 step + (1st case of n = 4)
    // 1 step + (2nd case of n = 4)
    // 1 step + (3rd case of n = 4)
    // 1 step + (4th case of n = 4)
    // 1 step + (5th case of n = 4)
    // 2 steps + (1st case of n = 3)
    // 2 steps + (2nd case of n = 3)
    // 2 steps + (3rd case of n = 3)
    // i.e. the output is: (Output for n = 4) + (Output for n = 3)
    
       if (n <= 3) {
           return n;
       }
    
    
    // climbStairs(n) = climbStairs(n-1) + climbStairs(n-2)
    // climbStairs(n) = (climbStairs(n-2) + climbStairs(n-3)) + climbStairs(n-2)
    // (because climbStairs(n-1) = climbStairs(n-2) + climbStairs(n-3))
       return 2*climbStairs(n-2) + climbStairs(n-3);
    
    
    };