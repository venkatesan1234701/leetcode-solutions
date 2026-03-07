/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum = 0
    let arr = []
    let count = {}
    for(let i of nums){
        count[i] = (count[i] || 0)+1
    }
    for(let k in count){
        if(count[k]===1){
           arr.push(Number(k))
        }
    }
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum
};