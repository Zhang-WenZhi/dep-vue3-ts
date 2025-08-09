/**
 * Definition for singly-linked list. */
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }


/**
 * 检测单链表中是否存在环
 * 
 * 采用快慢指针（Floyd 判圈算法）实现，时间复杂度 O(n)，空间复杂度 O(1)
 * 原理：慢指针每次移动1步，快指针每次移动2步。如果链表有环，两指针终将相遇；
 * 若链表无环，快指针会先到达链表末尾
 * 
 * @param {ListNode | null} head - 链表的头节点
 * @returns {boolean} 若链表存在环则返回 true，否则返回 false
 * @example
 * // 有环链表
 * const node1 = new ListNode(3);
 * const node2 = new ListNode(2);
 * const node3 = new ListNode(0);
 * const node4 = new ListNode(-4);
 * node1.next = node2;
 * node2.next = node3;
 * node3.next = node4;
 * node4.next = node2; // 形成环
 * hasCycle(node1); // 返回 true
 * 
 * @example
 * // 无环链表
 * const node1 = new ListNode(1);
 * const node2 = new ListNode(2);
 * node1.next = node2;
 * hasCycle(node1); // 返回 false
 */
function hasCycle(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return false;
    }
    let slow: ListNode | null = head;
    let fast: ListNode | null = head.next;
    while (fast !== slow) {
        if (!fast || !fast.next) {
            return false;
        }
        slow = slow!.next;
        fast = fast.next.next;
        
    }
    return true;
};

function hasCycle2(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return false;
    }
    let slow: ListNode | null = head;  // 允许slow为null
    let fast: ListNode | null = head.next;  // 允许fast为null
    
    while (slow !== fast) {  // 用!==比较，包括null的情况
        // 如果fast到达末尾，说明没有环
        if (!fast || !fast.next) {
            return false;
        }
        slow = slow!.next;  // 使用!断言slow不为null，因为循环条件保证此时有值
        fast = fast.next.next;
    }
    // 当slow === fast时，说明有环
    return true;
};
