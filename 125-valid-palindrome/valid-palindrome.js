/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
let clean = s.replace(/[^a-zA-Z0-9]/g, "").toUpperCase()
let rev = ''
for(let i=clean.length-1;i>=0;i--){
   rev += clean[i]
}
if(clean!==rev){
  return false
}else{
  return true
}
};