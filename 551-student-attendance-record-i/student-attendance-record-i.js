/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let count = {}
for(let i of s){
  count[i] = (count[i] || 0)+1
}
if(count["A"] >=2){
  return false
}else if(s.includes("LLL")){
  return false
}else{
    return true
}
};