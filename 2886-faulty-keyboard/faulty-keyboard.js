/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
let v = 'i'
let rev = []
for(let i of s){
  if(i===v){
    rev.reverse()
  }else{
    rev.push(i)
  }
}
return rev.join('')
};