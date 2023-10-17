const TwoSumII = (nums, target) => {
  let i = 0,
    j = nums.length - 1;

  while (i < j) {
    const sum = nums[i] + nums[j];

    if (sum === target) return [i + 1, j + 1];
    else if (sum > target) j--;
    else i++;
  }
};
