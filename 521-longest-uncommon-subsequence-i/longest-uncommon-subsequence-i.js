/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if(a==b){
        return -1
    }
    while(a.length < b.length){
        return b.length
    }
    return a.length
};