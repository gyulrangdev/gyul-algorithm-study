function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const charsMap = new Map<string, number>();
  for (const char of s) {
    const prevCount = charsMap.get(char) ?? 0;
    charsMap.set(char, prevCount + 1);
  }

  for (const char of t) {
    if (!charsMap.has(char)) {
      return false;
    }

    const prevCount = charsMap.get(char);
    if (prevCount && prevCount > 1) {
      charsMap.set(char, prevCount - 1);
    } else {
      charsMap.delete(char);
    }
  }

  return charsMap.size === 0;
}

function isAnagram2(s: string, t: string): boolean {
  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], (map.get(s[i]) ?? 0) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      if ((map.get(t[i]) ?? 0) - 1 === 0) {
        map.delete(t[i]);
      } else {
        map.set(t[i], (map.get(t[i]) ?? 0) - 1);
      }
    } else {
      return false;
    }
  }

  if (map.size === 0) {
    return true;
  } else {
    return false;
  }
}
