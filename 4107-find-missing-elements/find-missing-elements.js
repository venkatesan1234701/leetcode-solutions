/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
   let num = nums.sort((a,b) => a-b)
   let arr = []
   for(let i=num[0];i<num[num.length-1];i++){
    if(!num.includes(i)){
        arr.push(i)
    }
   }
   return arr
};