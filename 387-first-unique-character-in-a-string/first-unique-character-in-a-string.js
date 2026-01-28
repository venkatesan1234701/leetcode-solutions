/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
let count = {}
for(let i of s){
    count[i] = (count[i] || 0)+1 
}
for(let i=0;i<s.length;i++){
    if(count[s[i]]===1){
        return i
    }
}
return -1
};