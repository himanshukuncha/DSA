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


// const strStr = (hayStack, needle) => {
//     const M = needle.length;
//     const N = hayStack.length;
//     if (M === 0) return 0;
//     const lps = computeLPSArray(needle, M);
//     let i = 0; // index for hayStack
//     let j = 0; // index for needle
//     while (i < N) {
//         if (needle[j] === hayStack[i]) {
//             i++;
//             j++;
//         }
//         if (j === M) {
//             return i - j;
//         } else if (i < N && needle[j] !== hayStack[i]) {
//             if (j !== 0) {
//                 j = lps[j - 1];
//             } else {
//                 i++;
//             }
//         }
//     }
//     return -1;
// };

// const computeLPSArray = (needle, M) => {
//     const lps = new Array(M).fill(0);
//     let length = 0;
//     let i = 1;
//     while (i < M) {
//         if (needle[i] === needle[length]) {
//             length++;
//             lps[i] = length;
//             i++;
//         } else {
//             if (length !== 0) {
//                 length = lps[length - 1];
//             } else {
//                 lps[i] = 0;
//                 i++;
//             }
//         }
//     }
//     return lps;
// };

// console.log(strStr("sadbutsad", "sad")); // 0
// console.log(strStr("leetcode", "leeto")); // -1
