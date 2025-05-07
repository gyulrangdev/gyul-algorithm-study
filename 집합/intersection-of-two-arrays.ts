function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result: number[] = [];

  set1.forEach((v) => {
    if (set2.has(v)) result.push(v);
  });

  return result;
}
