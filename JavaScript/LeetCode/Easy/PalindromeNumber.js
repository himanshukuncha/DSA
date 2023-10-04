const isPalindromeNumber = (num) => {
  const originalNum = num;
  let reversedNum = 0;

  while (num > 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return originalNum === reversedNum;
};

console.log(isPalindromeNumber(4554354));
