/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
   count = 0
   n = num
   while (n>0){
   digit  = n%10
   if ( digit !==0 && num % digit===0){
   count ++
   }
   n = Math.floor(n/10)
   }
   return count
};