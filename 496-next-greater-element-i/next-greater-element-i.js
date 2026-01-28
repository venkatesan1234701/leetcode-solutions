/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
   let result = [];
    for(let i = 0; i < nums1.length; i++) {
        let found = false;
        let next = -1;
        for(let j = 0; j < nums2.length; j++) {
            if(nums1[i] === nums2[j]) {
                found = true;
            } else if(found && nums2[j] > nums1[i]) {
                next = nums2[j];
                break;
            }
        }
        result.push(next);
    }
    return result;
};