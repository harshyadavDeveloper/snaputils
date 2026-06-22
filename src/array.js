// Removes duplicate values from an array
// unique([1, 2, 2, 3, 3]) → [1, 2, 3]
export function unique(arr) {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
}

// Groups an array of objects by a key or function
// groupBy([{type: "a"}, {type: "b"}], "type") → { a: [...], b: [...] }
// groupBy([1, 2, 3, 4, 5], n => n % 2 === 0 ? "even" : "odd") → { even: [...], odd: [...] }
// groupBy([{age: 15}, {age: 25}], item => item.age >= 18 ? "adult" : "minor")
export function groupBy(arr, keyOrFn) {
  if (!Array.isArray(arr)) return {};
  return arr.reduce((result, item) => {
    const group = typeof keyOrFn === "function" ? keyOrFn(item) : item[keyOrFn];
    if (!result[group]) result[group] = [];
    result[group].push(item);
    return result;
  }, {});
}

// Splits an array into chunks with more options
// chunk([1,2,3,4,5], 2) → [[1,2],[3,4],[5]]
// chunk([1,2,3,4,5], 2, { fill: 0 }) → [[1,2],[3,4],[5,0]]
// chunk([1,2,3,4,5,6], 2, { balanced: true }) → [[1,2],[3,4],[5,6]]
export function chunk(arr, size, options = {}) {
  if (!Array.isArray(arr) || size < 1) return [];
  const { fill, balanced = false } = options;

  if (balanced) {
    const chunkCount = Math.ceil(arr.length / size);
    return Array.from({ length: chunkCount }, (_, i) =>
      arr.slice(i * size, (i + 1) * size),
    );
  }

  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }

  // fill last chunk if needed
  if (fill !== undefined && chunks.length > 0) {
    const lastChunk = chunks[chunks.length - 1];
    while (lastChunk.length < size) {
      lastChunk.push(fill);
    }
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
