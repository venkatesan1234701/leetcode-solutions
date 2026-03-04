/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
     let charCount = {};
    for (let c of chars) {
        charCount[c] = (charCount[c] || 0) + 1;
    }
    let totalLength = 0;
    for (let word of words) {
        let wordCount = {};
        let canForm = true;
        for (let c of word) {
            wordCount[c] = (wordCount[c] || 0) + 1;
            if (wordCount[c] > (charCount[c] || 0)) {
                canForm = false;
                break;
            }
        }
        if (canForm) {
            totalLength += word.length;
        }
    }
    return totalLength;
};