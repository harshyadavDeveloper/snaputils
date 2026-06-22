// Removes specified keys from an object
// omit({a: 1, b: 2, c: 3}, ["b", "c"]) → {a: 1}
export function omit(obj, keys) {
  if (!obj || typeof obj !== "object") return {};
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key)),
  );
}

// Picks specified keys from an object
// pick({a: 1, b: 2, c: 3}, ["a", "c"]) → {a: 1, c: 3}
export function pick(obj, keys) {
  if (!obj || typeof obj !== "object") return {};
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => keys.includes(key)),
  );
}

// Deep clones an object supporting Date, Map, Set and circular references
// deepClone({a: 1, b: {c: 2}}) → {a: 1, b: {c: 2}} (new reference)
// deepClone(new Date()) → new Date instance
// deepClone(new Map()) → new Map instance
// deepClone(new Set()) → new Set instance
export function deepClone(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;

  // handle circular references
  if (seen.has(obj)) return seen.get(obj);

  // handle Date
  if (obj instanceof Date) return new Date(obj.getTime());

  // handle Map
  if (obj instanceof Map) {
    const clonedMap = new Map();
    seen.set(obj, clonedMap);
    obj.forEach((value, key) => {
      clonedMap.set(deepClone(key, seen), deepClone(value, seen));
    });
    return clonedMap;
  }

  // handle Set
  if (obj instanceof Set) {
    const clonedSet = new Set();
    seen.set(obj, clonedSet);
    obj.forEach((value) => {
      clonedSet.add(deepClone(value, seen));
    });
    return clonedSet;
  }

  // handle Array
  if (Array.isArray(obj)) {
    const clonedArr = [];
    seen.set(obj, clonedArr);
    obj.forEach((item) => clonedArr.push(deepClone(item, seen)));
    return clonedArr;
  }

  // handle Object
  const clonedObj = {};
  seen.set(obj, clonedObj);
  Object.entries(obj).forEach(([key, value]) => {
    clonedObj[key] = deepClone(value, seen);
  });
  return clonedObj;
}
