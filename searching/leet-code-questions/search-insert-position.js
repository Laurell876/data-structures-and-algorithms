/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    let previous;
    let insertIndex = -1;

    if (nums.length === 0) {
        return 0 // add the value to the first index
    }
    else if (nums.length === 1) {
        if (target === nums[0] || target < nums[0]) return 0  // add it to the start or its found at the start
        else if (target > nums[0]) return nums.length // add it to the end
    }


    while (start <= end) {
        let mid = Math.ceil((start+end)/2)
        let midVal = nums[mid]

        if (midVal === target) {
            return mid
        } 
        else {

            if ((nums[mid - 1] > target && nums[mid] < target) || (nums[mid - 1] < target && nums[mid] > target)) {
                insertIndex = mid
            }

            if (midVal > target) {
                end--
            } else {
                start++
            }
        }
    }

    // the value would be added to the end of the array if insertIndex is undefined
    if (insertIndex !== -1) {
        return insertIndex
    } else {
        console.log("insertIndex: " + insertIndex)
        if (target > nums[nums.length - 1]) return nums.length // add it to the end
        else if (target < nums[0]) return 0 // add it to the start
    }
};