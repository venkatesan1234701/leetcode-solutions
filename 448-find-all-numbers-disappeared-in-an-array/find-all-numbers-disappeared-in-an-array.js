/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
   let set1 = new Set(nums)
   let arr=[]
//let set2 = new Set(count)
let n=nums.length
 for(let i=1;i<=n;i++){
   if(!set1.has(i)){
     arr.push(i)
   }
 }
 return arr
};