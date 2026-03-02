/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let arr = s.split('');
    let changed = true;

    while (changed) {
        changed = false;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                arr.splice(i, 2);  
                changed = true;
                break;
            }
        }
    }

    return arr.join('');
};