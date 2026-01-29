/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head){
        return null
    }
    let cut = head
    let v = null
    while(cut){
        let next = cut.next
        cut.next = v
        v = cut
        cut = next
    }
    return v
};