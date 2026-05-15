import { sum, average, median, factorial, min, max } from "../src/math.js";

describe("sum", () => {
  test("sums correctly", () => expect(sum([1, 2, 3, 4, 5])).toBe(15));
  test("empty array returns 0", () => expect(sum([])).toBe(0));
  test("non array returns 0", () => expect(sum("not array")).toBe(0));
});

describe("average", () => {
  test("averages correctly", () => expect(average([1, 2, 3, 4, 5])).toBe(3));
  test("empty array returns 0", () => expect(average([])).toBe(0));
});

describe("median", () => {
  test("odd length array", () => expect(median([1, 2, 3, 4, 5])).toBe(3));
  test("even length array", () => expect(median([1, 2, 3, 4])).toBe(2.5));
  test("empty array returns 0", () => expect(median([])).toBe(0));
});

describe("factorial", () => {
  test("factorial of 5", () => expect(factorial(5)).toBe(120));
  test("factorial of 0", () => expect(factorial(0)).toBe(1));
  test("factorial of 1", () => expect(factorial(1)).toBe(1));
  test("negative returns null", () => expect(factorial(-1)).toBeNull());
});

describe("min", () => {
  test("returns minimum", () => expect(min([3, 1, 4, 1, 5])).toBe(1));
  test("empty array returns null", () => expect(min([])).toBeNull());
});

describe("max", () => {
  test("returns maximum", () => expect(max([3, 1, 4, 1, 5])).toBe(5));
  test("empty array returns null", () => expect(max([])).toBeNull());
});
