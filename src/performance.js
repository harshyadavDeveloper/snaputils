// Returns a debounced version of a function
// const debouncedFn = debounce(() => console.log("hello"), 500)
// calling debouncedFn() multiple times will only execute once after 500ms
export function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Returns a throttled version of a function
// const throttledFn = throttle(() => console.log("hello"), 500)
// calling throttledFn() multiple times will only execute once every 500ms
export function throttle(fn, limit = 300) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      return fn.apply(this, args);
    }
  };
}

// Returns a memoized version of a function
// const memoizedFn = memoize((n) => n * 2)
// memoizedFn(5) → 10 (computed)
// memoizedFn(5) → 10 (cached)
export function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
