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
var deleteDuplicates = function(head) {
   let cut = head
   while(cut && cut.next){
    if(cut.val===cut.next.val){
        cut.next = cut.next.next
    }else{
        cut = cut.next
    }
   }
   return head
};