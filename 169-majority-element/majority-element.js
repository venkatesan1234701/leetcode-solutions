/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   let count = {}
   for(let i of nums){
      count[i] = (count[i] || 0)+1
    }
    for(let key in count){
        if(count[key] > nums.length/2){
            return Number(key)
        }
    }
};