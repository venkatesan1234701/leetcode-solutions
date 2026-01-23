/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let count = {}
for(let i of arr){
  count[i] = (count[i] || 0)+1
}
let v = []
for(let key in count){
  if(count[key]===1){
    v.push(key)
  }
}
return v[k-1] || ""
};