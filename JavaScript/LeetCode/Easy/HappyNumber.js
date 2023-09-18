const getSumOfSquares = (n) => {
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
};

const isHappy = (n) => {
  let slow = n;
  let fast = getSumOfSquares(n);

  while (fast !== 1 && slow !== fast) {
    slow = getSumOfSquares(slow);
    fast = getSumOfSquares(getSumOfSquares(fast)); // Two steps at a time
  }

  return fast === 1;
};

console.log(isHappy(19)); // true
