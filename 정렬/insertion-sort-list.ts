export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function insertionSortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  let dummy = new ListNode(0, head);
  let current = head;

  while (current !== null && current.next !== null) {
    let next = current.next;

    let prev = dummy;
    let sortedCurrent = dummy.next;

    while (sortedCurrent !== null && sortedCurrent.val < current.val) {
      prev = sortedCurrent;
      sortedCurrent = sortedCurrent.next;
    }

    current.next = sortedCurrent;
    prev.next = current;

    current = next;
  }
  return dummy.next;
}

// 테스트를 위한 배열을 리스트로 변환하는 함수
export function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const dummy = new ListNode(0);
  let current = dummy;

  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
}

insertionSortList(
  new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))))
);
