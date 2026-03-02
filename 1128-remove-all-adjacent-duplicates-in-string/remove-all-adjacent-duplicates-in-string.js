/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = []
    for (let i of s) {
        if (i === stack.at(-1)) {
            stack.pop(i)
            continue
        } else {
            stack.push(i)
        }
    }
    return stack.join("")
};