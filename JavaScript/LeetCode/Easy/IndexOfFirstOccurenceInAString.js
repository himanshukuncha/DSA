const strStr = (hayStack, needle) => {
  if (needle === "") return 0;
  if (hayStack.length < needle.length) return -1;

  for (let i = 0; i <= hayStack.length - needle.length; i++) {
    if (hayStack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
