/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
   let arr = new Set()
   for(let i=0; i<sentence.length ; i++){
    arr.add(sentence[i])
   }
   return arr.size === 26
};