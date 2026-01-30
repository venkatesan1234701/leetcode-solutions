/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let v = num.toString()
    for(let i=0;i<v.length;i++){
        if(v[i]==="6"){
            v = v.slice(0, i) + '9' + v.slice(i + 1);
            break
        }
    }
    return Number(v)
};