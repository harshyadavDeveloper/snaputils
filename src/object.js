// Removes specified keys from an object
// omit({a: 1, b: 2, c: 3}, ["b", "c"]) → {a: 1}
export function omit(obj, keys) {
  if (!obj || typeof obj !== "object") return {};
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key))
  );
}

// Picks specified keys from an object
// pick({a: 1, b: 2, c: 3}, ["a", "c"]) → {a: 1, c: 3}
export function pick(obj, keys) {
  if (!obj || typeof obj !== "object") return {};
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => keys.includes(key))
  );
}

// Deep clones an object
// deepClone({a: 1, b: {c: 2}}) → {a: 1, b: {c: 2}} (new reference)
export function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  return JSON.parse(JSON.stringify(obj));
}