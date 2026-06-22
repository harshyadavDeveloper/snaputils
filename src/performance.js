// Returns a debounced version of a function
// debounce(fn, 300) → fires after 300ms of inactivity
// debounce(fn, 300, { immediate: true }) → fires immediately then waits
export function debounce(fn, delay = 300, options = {}) {
  const { immediate = false } = options;
  let timer;

  return function (...args) {
    const callNow = immediate && !timer;

    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      if (!immediate) fn.apply(this, args);
    }, delay);

    if (callNow) fn.apply(this, args);
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

// Returns a memoized version of a function with optional cache size limit
// const memoizedFn = memoize((n) => n * 2)
// const memoizedFn = memoize((n) => n * 2, { maxSize: 100 })
export function memoize(fn, options = {}) {
  const { maxSize = Infinity } = options;
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) return cache.get(key);

    // if cache is full remove the oldest entry
    if (cache.size >= maxSize) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
