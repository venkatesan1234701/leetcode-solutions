/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
 let arr = nums1.concat(nums2)
 arr.sort((a,b) => a-b)
 let l = arr.length
 let ans = 0
 if(l%2==0){
    ans = (arr[l/2-1] + arr[l/2])/2
 }else{
    ans = arr[Math.floor(l/2)]
 }
 return ans
};