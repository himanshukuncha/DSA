const mergeSortedArray = (nums1, m, nums2, n) => {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }

  console.log(nums1);
};

mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
