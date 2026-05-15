import { debounce, throttle, memoize } from "../src/performance.js";

describe("memoize", () => {
  test("returns correct result", () => {
    const fn = memoize((n) => n * 2);
    expect(fn(5)).toBe(10);
  });
  test("caches result", () => {
    let count = 0;
    const fn = memoize((n) => {
      count++;
      return n * 2;
    });
    fn(5);
    fn(5);
    expect(count).toBe(1);
  });
});

describe("debounce", () => {
  test("executes after delay", (done) => {
    let count = 0;
    const fn = debounce(() => {
      count++;
    }, 50);
    fn();
    fn();
    fn();
    setTimeout(() => {
      expect(count).toBe(1);
      done();
    }, 100);
  });
});

describe("throttle", () => {
  test("executes only once within limit", () => {
    let count = 0;
    const fn = throttle(() => {
      count++;
    }, 100);
    fn();
    fn();
    fn();
    expect(count).toBe(1);
  });
});
