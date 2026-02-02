/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   let sp = s.split('').sort()
   let vp = t.split('').sort()
for(let i=0;i<=sp.length;i++){
    if(sp[i]!==vp[i]){
        return false
    }
}
return true
};