/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
   let count = 0
while(n > 0){
  if((n-1)/2){
    count++
  }
  n--
}
return count
};