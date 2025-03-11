/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function sortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  // List의 길이 구하기
  let length = 0;
  let currentNode: ListNode | null = head;

  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }

  // 중간 지점 찾기
  let middle = Math.floor(length / 2);
  let leftHead: ListNode | null = head;
  let rightHead: ListNode | null = null;

  currentNode = head;
  // 왼쪽 노드의 마지막 노드 찾기
  for (let i = 0; i < middle - 1 && currentNode; i++) {
    currentNode = currentNode.next;
  }

  // 리스트 나누기
  if (currentNode) {
    rightHead = currentNode.next;
    currentNode.next = null;
  }

  // 정렬
  const left = sortList(leftHead);
  const right = sortList(rightHead);

  return merge(left, right);
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // 더미 노드 생성
  const dummy = new ListNode(0);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    // l1과 l2를 비교하여 더 작은 쪽을 다음 노드에 붙인다.
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1 !== null) {
    current.next = l1;
  }

  if (l2 !== null) {
    current.next = l2;
  }

  return dummy.next;
}

const list = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
console.log(sortList(list));
