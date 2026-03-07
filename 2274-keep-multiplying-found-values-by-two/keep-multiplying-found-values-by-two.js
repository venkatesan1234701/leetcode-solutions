/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
         let or=nums.sort((a,b)=>a-b);
    for(let i=0;i<=nums.length-1;i++){
        if(or[i]===original){
            original=original*2
        }  
    }
    console.log(original)
    return original
};