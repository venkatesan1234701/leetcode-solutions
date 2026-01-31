/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
 let num = nums.sort((a,b) => a-b)
  for(let i=0;i<num.length;i++){
    if(num[i]!==i){
      return i
    }
  }
  return num.length
};