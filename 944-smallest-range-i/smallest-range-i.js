/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let max = Math.max(...nums)
    let min = Math.min(...nums)
    let newmax = max - k
    let newmin = min + k
    return Math.max(0,newmax - newmin)
};