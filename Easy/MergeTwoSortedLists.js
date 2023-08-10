// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode, tail
    if (!list1 || !list2) return list2 || list1;

    //setting smaller value as head
    if (list1.val < list2.val) {
        head = list1;
        list1 = list1.next;
    }   else {
        head = list2;
        list2 = list2.next;
    }

    //starting from head, we are increasing by adding tail
    tail = head; 

    //if two arrs contain elements 
    while (list1 &&list2) {
        //smaller val gets added first to make it sorted linkedlist 
        if (list1.val <list2.val) {
            tail.next = list1;
            tail = tail.next;
            list1 = list1.next;
        } else {
            tail.next = list2;
            tail = tail.next;
            list2 = list2.next;
        }
    }

    //after you loop thr all the elements in one of the arrs => add the remaining elements as tail 
    tail.next = list1 ||list2;

    //head contains all the elements which are inserted as tail
    return head;

};