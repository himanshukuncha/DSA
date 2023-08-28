const IsSubsequence = (s, t) => {
  let index = 0;

  for (const char of t) {
    if (char === s[index]) {
      index++;
    }
    if (index === s.length) {
      return true;
    }
  }

  return index === s.length;
};

console.log(IsSubsequence("aaaaaa", "bbaaaa")); // Outputs: false
