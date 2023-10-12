const containerWithMostWater = (height) => {
  let left = 0,
    right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    const width = right - left;

    maxArea = Math.max(maxArea, minHeight * width);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
