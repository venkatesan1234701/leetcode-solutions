/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
let count = 0
let mv = [...heights]
mv.sort((a,b) => a - b)
for(let i=0;i<heights.length;i++){
        if(heights[i] !== mv[i]){
            count++
    }
}
return count
};