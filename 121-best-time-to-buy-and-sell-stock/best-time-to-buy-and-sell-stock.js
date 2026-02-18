/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
let max = 0
let bye = prices[0]
for(let i=0;i<prices.length;i++){
    if(bye > prices[i]){
        bye = prices[i]
    }
    max = Math.max(max,prices[i] - bye)
}
return max
};