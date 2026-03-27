/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
let v = true
let num = []
for(let i=0;i<s.length;i++){
  if(s[i]=="("){
    num.push(")")
  }else if(s[i]==="["){
    num.push("]")
  }else if(s[i]==="{"){
    num.push("}")
  }else if(s[i]!==num.pop()){
    v = false
    break
  }
}
if(num.length!==0){
  v = false
}
return v
};