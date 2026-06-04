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

// Flattens a nested array to a given depth
// flatten([1, [2, [3, [4]]]]) → [1, 2, 3, 4]
// flatten([1, [2, [3]]], 1) → [1, 2, [3]]
export function flatten(arr, depth = Infinity) {
  if (!Array.isArray(arr)) return [];
  return arr.flat(depth);
}

// Shuffles an array randomly
// shuffle([1, 2, 3, 4, 5]) → [3, 1, 5, 2, 4]
export function shuffle(arr) {
  if (!Array.isArray(arr)) return [];
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Returns elements in first array but not in second
// difference([1, 2, 3], [2, 3, 4]) → [1]
export function difference(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];
  return arr1.filter((item) => !arr2.includes(item));
}

// Returns elements that exist in both arrays
// intersection([1, 2, 3], [2, 3, 4]) → [2, 3]
export function intersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];
  return arr1.filter((item) => arr2.includes(item));
}
