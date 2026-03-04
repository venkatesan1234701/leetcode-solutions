/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {

let max = (25/100)*arr.length
let count = {}
for(let i of arr){
   count[i] = (count[i] || 0)+1
}
for(let key in count){
     if(count[key] > max){
       return Number(key)
   }
}
};