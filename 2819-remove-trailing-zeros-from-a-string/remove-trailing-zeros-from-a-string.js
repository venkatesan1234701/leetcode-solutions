/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
let v = num.length
for(let i=num.length-1;i>=0;i--){
    if(num[i]==="0"){
        v--
    }else{
        break
    }
}
return num.substring(v,0)
};