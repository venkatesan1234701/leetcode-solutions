/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while(head && head.val==val){
        head = head.next
    }
    let cut = head
    while(cut&&cut.next){
        if(cut.next.val===val){
            cut.next = cut.next.next
        }else{
            cut = cut.next
        }
    }
    return head
};