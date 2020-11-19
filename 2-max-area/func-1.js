const test = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const test = [1, 8, 9, 6, 2, 5, 4, 9, 8, 7];
function maxArea(height = []) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    if (area > max) {
      max = area;
    }
    // 左侧值小于右侧就由左到右收敛
    if (height[left] < height[right]) {
      const lastLeft = height[left];
      left++;
      if (height[left] <= lastLeft && left < right) {
        left++;
      }
    } else {
      const lastRight = height[right];
      right--;
      if (height[right] <= lastRight && left < right) {
        right--;
      }
    }
  }

  return max;
}
console.log(maxArea(test));
