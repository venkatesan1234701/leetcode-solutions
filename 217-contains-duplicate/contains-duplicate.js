/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
      let seen = new Set()
    for(let i=0;i<nums.length;i++){
        let count = nums[i];
            if(seen.has(count)){
                return true 
        } 
        seen.add(count)
    }
    return false;
};