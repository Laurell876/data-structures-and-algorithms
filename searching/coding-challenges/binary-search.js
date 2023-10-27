/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    let end = nums.length - 1

    if (nums.length === 1) {
        if (nums[0] === target) return 0
    }

    while(start <= end) {
        let mid = Math.ceil((start+end)/2)
        let midVal = nums[mid]

        console.log("mid: " + mid)
        console.log("midVal: " + midVal)

        if (midVal === target) {
            return mid
        } else if (midVal < target) {
            start++
        } else {
            end--
        }
    }
    return -1
};