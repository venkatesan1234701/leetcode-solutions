/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
 let count = {}
let arr = []
for(let i of nums){
    count[i] = (count[i] || 0) +1
}
for(let ket in count){
    if(count[ket] > 1){
        arr.push(Number(ket))
    }
}
    return arr
};