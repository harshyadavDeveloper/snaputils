// Returns the sum of an array of numbers
// sum([1, 2, 3, 4, 5]) → 15
export function sum(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((acc, val) => acc + val, 0);
}

// Returns the average of an array of numbers
// average([1, 2, 3, 4, 5]) → 3
export function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  return sum(arr) / arr.length;
}

// Returns the median of an array of numbers
// median([1, 2, 3, 4, 5]) → 3
export function median(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

// Returns the factorial of a number
// factorial(5) → 120
export function factorial(n) {
  if (typeof n !== "number" || n < 0) return null;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Returns the minimum value in an array
// min([3, 1, 4, 1, 5]) → 1
export function min(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.min(...arr);
}

// Returns the maximum value in an array
// max([3, 1, 4, 1, 5]) → 5
export function max(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.max(...arr);
}
