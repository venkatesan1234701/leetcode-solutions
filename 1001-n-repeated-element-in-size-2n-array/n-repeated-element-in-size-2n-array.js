/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
let count = {}
for(let i of nums){
  count[i] = (count[i] || 0)+1
}
console.log(count)
let max =  0
let maxcount = null
for(let key in count){
  if(count[key] > max){
    max = count[key]
    maxcount = Number(key)
  }
}
return maxcount
return max
};