import {
  generateUID,
  hashString,
  base64Encode,
  base64Decode,
} from "../src/security.js";

describe("generateUID", () => {
  test("generates default length 10", () =>
    expect(generateUID().length).toBe(10));
  test("generates custom length", () =>
    expect(generateUID(16).length).toBe(16));
  test("only alphanumeric chars", () =>
    expect(generateUID()).toMatch(/^[a-z0-9]+$/));
});

describe("hashString", () => {
  test("returns a string", () =>
    expect(typeof hashString("hello")).toBe("string"));
  test("same input same hash", () =>
    expect(hashString("hello")).toBe(hashString("hello")));
  test("different input different hash", () =>
    expect(hashString("hello")).not.toBe(hashString("world")));
  test("empty string returns empty", () => expect(hashString("")).toBe(""));
});

describe("base64Encode", () => {
  test("encodes correctly", () =>
    expect(base64Encode("hello")).toBe("aGVsbG8="));
  test("empty string returns empty", () => expect(base64Encode("")).toBe(""));
});

describe("base64Decode", () => {
  test("decodes correctly", () =>
    expect(base64Decode("aGVsbG8=")).toBe("hello"));
  test("roundtrip", () =>
    expect(base64Decode(base64Encode("snaputils"))).toBe("snaputils"));
  test("invalid input returns empty", () =>
    expect(base64Decode("!!!")).toBe(""));
});
