function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const tail = new ListNode();
    let curr = tail, r = 0;

    while (l1 || l2 || r) {
        let n = (l1?.val || 0) + (l2?.val || 0) + r;
        r = Math.floor(n / 10);
        curr.next = new ListNode(n % 10);
        curr = curr.next;
        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }

    return tail.next;
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));