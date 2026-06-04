import { flatten, shuffle, difference, intersection } from "../src/array.js";

describe("flatten", () => {
  test("flattens fully", () =>
    expect(flatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]));
  test("flattens to depth 1", () =>
    expect(flatten([1, [2, [3]]], 1)).toEqual([1, 2, [3]]));
  test("non array returns empty", () =>
    expect(flatten("not array")).toEqual([]));
});

describe("shuffle", () => {
  test("returns same length", () =>
    expect(shuffle([1, 2, 3, 4, 5]).length).toBe(5));
  test("contains same elements", () =>
    expect(shuffle([1, 2, 3]).sort()).toEqual([1, 2, 3]));
  test("non array returns empty", () =>
    expect(shuffle("not array")).toEqual([]));
});

describe("difference", () => {
  test("returns difference", () =>
    expect(difference([1, 2, 3, 4], [2, 3])).toEqual([1, 4]));
  test("no common elements", () =>
    expect(difference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3]));
  test("non array returns empty", () =>
    expect(difference("not", "array")).toEqual([]));
});

describe("intersection", () => {
  test("returns intersection", () =>
    expect(intersection([1, 2, 3, 4], [2, 3, 5])).toEqual([2, 3]));
  test("no common elements", () =>
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]));
  test("non array returns empty", () =>
    expect(intersection("not", "array")).toEqual([]));
});
