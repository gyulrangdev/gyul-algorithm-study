export function merge(intervals: number[][]): number[][] {
  if (intervals.length === 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);

  let result: number[][] = [];
  let current: number[] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const next = intervals[i];
    if (current[1] >= next[0]) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      result.push(current);
      current = next;
    }
  }

  result.push(current);

  return result;
}
