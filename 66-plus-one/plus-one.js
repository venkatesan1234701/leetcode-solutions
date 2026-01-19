/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let numStr = digits.join("")
  let num = BigInt(numStr)
  num = num + 1n
  return num.toString().split("").map(Number)
};