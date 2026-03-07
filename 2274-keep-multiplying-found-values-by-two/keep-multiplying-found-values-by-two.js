/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
     for(let i=0;i<nums.length;i++){
        if(nums[i]===original){
        original = 2*original
        i = -1
     }   
     }
     return original
};