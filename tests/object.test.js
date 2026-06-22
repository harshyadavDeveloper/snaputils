import { omit, pick, deepClone } from "../src/object.js";

describe("omit", () => {
  test("omits single key", () => expect(omit({ a: 1, b: 2, c: 3 }, ["b"])).toEqual({ a: 1, c: 3 }));
  test("omits multiple keys", () => expect(omit({ a: 1, b: 2, c: 3 }, ["b", "c"])).toEqual({ a: 1 }));
  test("returns empty for non object", () => expect(omit("not object", ["a"])).toEqual({}));
});

describe("pick", () => {
  test("picks single key", () => expect(pick({ a: 1, b: 2, c: 3 }, ["a"])).toEqual({ a: 1 }));
  test("picks multiple keys", () => expect(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 }));
  test("returns empty for non object", () => expect(pick("not object", ["a"])).toEqual({}));
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
  test("clones Date", () => {
    const date = new Date("2024-01-15");
    const cloned = deepClone(date);
    expect(cloned instanceof Date).toBe(true);
    expect(cloned.getTime()).toBe(date.getTime());
  });
  test("clones Map", () => {
    const map = new Map([["key", "value"]]);
    const cloned = deepClone(map);
    cloned.set("key", "modified");
    expect(map.get("key")).toBe("value");
  });
  test("clones Set", () => {
    const set = new Set([1, 2, 3]);
    const cloned = deepClone(set);
    cloned.add(4);
    expect(set.size).toBe(3);
    expect(cloned.size).toBe(4);
  });
  test("handles circular references", () => {
    const circular = { a: 1 };
    circular.self = circular;
    const cloned = deepClone(circular);
    expect(cloned.a).toBe(1);
    expect(cloned.self).toBe(cloned);
  });
});