/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
let v = s.split(' ')
let arr = []
for(let i=0;i<v.length;i++){
  let r = v[i]
  let k = ''
    for(let j=r.length-1;j>=0;j--){
     k += r[j]
  }
  arr.push(k)
}
return arr.join(' ')
};