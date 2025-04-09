/**
 * 75. Sort Colors
 * https://leetcode.com/problems/sort-colors/
 *
 * nums 배열에는 0, 1, 2만 포함되어 있으며, 이를 오름차순으로 정렬해야 함
 * one-pass 알고리즘을 사용해 제자리에서 정렬
 *
 * @param nums - 0, 1, 2로 이루어진 배열
 */
export function sortColors(nums: number[]): void {
  // 세 개의 포인터를 사용하는 Dutch national flag algorithm
  let low = 0; // 0을 놓을 위치 (0의 오른쪽 경계)
  let mid = 0; // 현재 검사 중인 위치
  let high = nums.length - 1; // 2를 놓을 위치 (2의 왼쪽 경계)

  // mid 포인터가 high 포인터를 넘어가면 종료
  while (mid <= high) {
    if (nums[mid] === 0) {
      // 0을 발견하면 low 위치와 교환하고 두 포인터 모두 전진
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // 1을 발견하면 그대로 두고 mid 포인터만 전진
      mid++;
    } else if (nums[mid] === 2) {
      // 2를 발견하면 high 위치와 교환하고 high 포인터만 후진
      // mid는 증가시키지 않음 (교환된 값이 0 또는 1일 수 있어 다시 검사 필요)
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}
