/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
      let l = nums1.slice(0, m)
    let r = nums2.slice(0, n)
    let num = []
    while(l.length && r.length){
        if(l[0] < r[0]){
            num.push(l.shift())
        } else {
            num.push(r.shift())
        }
    }
    num = [...num, ...l, ...r]
    for(let i=0;i<num.length;i++){
        nums1[i] = num[i]
    }
};