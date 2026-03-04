/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
let count = {}
for(let i of arr){
    count[i] = (count[i] || 0)+1
}

const ss = Object.values(count)

const vv = new Set(ss)

if(ss.length===vv.size){
    return true
}
return false
};