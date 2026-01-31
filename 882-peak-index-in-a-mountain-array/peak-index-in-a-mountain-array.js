/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let max = 0
    let val = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
            val = i
        }
    }
    return val
};