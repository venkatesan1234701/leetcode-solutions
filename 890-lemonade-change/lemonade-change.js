/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
 let five = 0, ten = 0;

    for (let b of bills) {
        if (b === 5) five++;
        else if (b === 10) {
            if (!five) return false;
            five--; 
            ten++;
        } 
        else {
            if (ten && five) { ten--; five--; }
            else if (five >= 3) five -= 3;
            else return false;
        }
    }
    
    return true;
};