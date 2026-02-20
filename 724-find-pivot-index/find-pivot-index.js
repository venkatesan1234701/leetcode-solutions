/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sum = 0
let total = nums.reduce((a,b) => a+b,0)
for(let i=0;i<nums.length;i++){
    let venkat = total - sum - nums[i]
    if(sum === venkat){
       return i
    }
    sum += nums[i]
}
   return -1
};