/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let vv = s.trim().split(' ')
    return vv[vv.length-1].length
};