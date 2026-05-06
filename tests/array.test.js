import { unique, groupBy, chunk } from "../src/array.js";

describe("unique", () => {
  test("removes duplicates numbers", () =>
    expect(unique([1, 2, 2, 3, 3])).toEqual([1, 2, 3]));
  test("removes duplicate strings", () =>
    expect(unique(["a", "b", "a"])).toEqual(["a", "b"]));
  test("returns empty for non array", () =>
    expect(unique("not array")).toEqual([]));
});

describe("chunk", () => {
  test("chunks correctly", () =>
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]));
  test("equal chunks", () =>
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]));
  test("returns empty for non array", () =>
    expect(chunk("not array", 2)).toEqual([]));
});

describe("groupBy", () => {
  test("groups correctly", () => {
    const input = [
      { type: "fruit", name: "apple" },
      { type: "veggie", name: "carrot" },
      { type: "fruit", name: "mango" },
    ];
    const result = groupBy(input, "type");
    expect(result.fruit).toHaveLength(2);
    expect(result.veggie).toHaveLength(1);
  });
  test("returns empty for non array", () =>
    expect(groupBy("not array", "key")).toEqual({}));
});
