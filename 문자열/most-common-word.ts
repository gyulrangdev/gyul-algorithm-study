export function mostCommonWord(paragraph: string, banned: string[]): string {
  const words = paragraph.toLowerCase().split(/[!?',;. ]/g);
  const map = new Map();

  for (const word of words) {
    if (word !== "") {
      map.set(word, (map.get(word) ?? 0) + 1);
    }
  }

  for (const ban of banned) {
    map.delete(ban);
  }

  return Array.from(map).sort((a, b) => b[1] - a[1])[0][0];
}
