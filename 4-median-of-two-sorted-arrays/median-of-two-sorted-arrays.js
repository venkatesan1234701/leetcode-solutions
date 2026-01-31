/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
let arr = nums1.concat(nums2)
arr.sort((a,b) => a-b)
let n = arr.length
let ans = 0
if(n%2===0){
   ans = (arr[n/2-1] + arr[n/2])/2
}else{
    ans = arr[Math.floor(n/2)]
}
return ans
};