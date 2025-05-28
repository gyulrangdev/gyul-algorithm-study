export function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  // 배열이 3개 미만이면 빈 배열 반환
  if (nums.length < 3) {
    return result;
  }

  // 배열을 오름차순으로 정렬
  nums.sort((a, b) => a - b);

  // 첫 번째 숫자를 고정하고 나머지 두 숫자를 투포인터로 찾기
  for (let i = 0; i < nums.length - 2; i++) {
    // 중복된 첫 번째 숫자 건너뛰기
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // 합이 0인 조합 발견
        result.push([nums[i], nums[left], nums[right]]);

        // 중복된 left 값 건너뛰기
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        // 중복된 right 값 건너뛰기
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        // 합이 0보다 작으면 left 포인터를 오른쪽으로 이동
        left++;
      } else {
        // 합이 0보다 크면 right 포인터를 왼쪽으로 이동
        right--;
      }
    }
  }

  return result;
}
