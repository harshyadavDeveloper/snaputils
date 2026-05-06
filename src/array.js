// Removes duplicate values from an array
// unique([1, 2, 2, 3, 3]) → [1, 2, 3]
export function unique(arr) {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
}

// Groups an array of objects by a key
// groupBy([{type: "a", val: 1}, {type: "b", val: 2}, {type: "a", val: 3}], "type")
// → { a: [{type: "a", val: 1}, {type: "a", val: 3}], b: [{type: "b", val: 2}] }
export function groupBy(arr, key) {
  if (!Array.isArray(arr)) return {};
  return arr.reduce((result, item) => {
    const group = item[key];
    if (!result[group]) result[group] = [];
    result[group].push(item);
    return result;
  }, {});
}

// Splits an array into chunks of a given size
// chunk([1, 2, 3, 4, 5], 2) → [[1, 2], [3, 4], [5]]
export function chunk(arr, size) {
  if (!Array.isArray(arr) || size < 1) return [];
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}