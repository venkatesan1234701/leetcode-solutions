/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let v = s.trim().split(/\s+/).reverse().join(' ')
    return v
};