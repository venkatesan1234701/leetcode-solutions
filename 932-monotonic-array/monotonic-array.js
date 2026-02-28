/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let v = true
    let s = true
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] > nums[i+1]){
            v = false
        }
        if(nums[i] < nums[i+1]){
            s = false
        }
    }
    return v || s
};