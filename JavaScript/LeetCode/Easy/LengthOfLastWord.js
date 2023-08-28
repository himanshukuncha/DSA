const LengthOfLastWord = (str) => {
  let end = str.length - 1;
  while (end >= 0 && str[end] === " ") {
    end--;
  }

  let start = end;

  while (start >= 0 && str[start] !== " ") {
    start--;
  }

  return end - start;
};

console.log(LengthOfLastWord("Hello World")); 
