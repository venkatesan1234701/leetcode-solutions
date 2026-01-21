/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let count = 2
    let count1 =1
    let temp = 0
    if(n <=  2){
        return n
    }
   for(let i=3;i<=n;i++){
      temp = count1 + count
      count1 = count
      count = temp
   }
   return count
};