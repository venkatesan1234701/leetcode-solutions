/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
        let res = 0;
    let prevCount = 0;
    let currCount = 0;

    for (let i = 0; i < s.length; i++) {
        currCount += 1;

        if (s[i] !== s[i + 1]) {
            res += Math.min(prevCount, currCount);

            prevCount = currCount;
            currCount = 0;
        }
    }

    return res;
};