import { parseURL, buildQueryString, parseQueryString } from "../src/url.js";

describe("parseURL", () => {
  test("parses valid URL", () => {
    const result = parseURL("https://example.com/path?foo=bar");
    expect(result.host).toBe("example.com");
    expect(result.pathname).toBe("/path");
    expect(result.params).toEqual({ foo: "bar" });
  });
  test("returns null for invalid URL", () =>
    expect(parseURL("notaurl")).toBeNull());
});

describe("buildQueryString", () => {
  test("builds correctly", () =>
    expect(buildQueryString({ name: "harsh", age: 25 })).toBe(
      "name=harsh&age=25",
    ));
  test("empty object returns empty", () =>
    expect(buildQueryString({})).toBe(""));
  test("non object returns empty", () =>
    expect(buildQueryString(null)).toBe(""));
});

describe("parseQueryString", () => {
  test("parses correctly", () =>
    expect(parseQueryString("name=harsh&age=25")).toEqual({
      name: "harsh",
      age: "25",
    }));
  test("handles leading ?", () =>
    expect(parseQueryString("?name=harsh")).toEqual({ name: "harsh" }));
  test("empty string returns empty", () =>
    expect(parseQueryString("")).toEqual({}));
});
