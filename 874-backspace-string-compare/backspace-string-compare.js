/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
   let a = []
   let b = []
   for(let i of s){
    if(i==="#"){
        a.pop()
    }else{
        a.push(i)
    }
   }
   for(let j of t){
    if(j==="#"){
        b.pop()
    }
    else{
        b.push(j)
    }
   }
   return a.join('')===b.join('')
};