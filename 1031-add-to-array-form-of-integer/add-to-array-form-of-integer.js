/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
let s = num.join('')
let v = BigInt(s) + BigInt(k)
let r = v.toString().split('').map(Number)
return r
};