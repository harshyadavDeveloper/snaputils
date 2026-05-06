import { omit, pick, deepClone } from "../src/object.js";

describe("omit", () => {
  test("omits single key", () =>
    expect(omit({ a: 1, b: 2, c: 3 }, ["b"])).toEqual({ a: 1, c: 3 }));
  test("omits multiple keys", () =>
    expect(omit({ a: 1, b: 2, c: 3 }, ["b", "c"])).toEqual({ a: 1 }));
  test("returns empty for non object", () =>
    expect(omit("not object", ["a"])).toEqual({}));
});

describe("pick", () => {
  test("picks single key", () =>
    expect(pick({ a: 1, b: 2, c: 3 }, ["a"])).toEqual({ a: 1 }));
  test("picks multiple keys", () =>
    expect(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 }));
  test("returns empty for non object", () =>
    expect(pick("not object", ["a"])).toEqual({}));
});

describe("deepClone", () => {
  test("clones object", () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = deepClone(original);
    cloned.b.c = 99;
    expect(original.b.c).toBe(2);
    expect(cloned.b.c).toBe(99);
  });
  test("handles null", () => expect(deepClone(null)).toBe(null));
});
