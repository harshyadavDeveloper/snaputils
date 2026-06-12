import { generateOTP, encryptString, decryptString } from "../src/security.js";

describe("generateOTP", () => {
  test("default length 6", () => expect(generateOTP().length).toBe(6));
  test("custom length 4", () => expect(generateOTP(4).length).toBe(4));
  test("only digits", () => expect(generateOTP()).toMatch(/^\d+$/));
});

describe("encryptString", () => {
  test("encrypts a string", () =>
    expect(encryptString("hello", "key")).not.toBe("hello"));
  test("empty string returns empty", () =>
    expect(encryptString("", "key")).toBe(""));
});

describe("decryptString", () => {
  test("roundtrip", () =>
    expect(decryptString(encryptString("hello", "key"), "key")).toBe("hello"));
  test("wrong key returns garbage", () =>
    expect(decryptString(encryptString("hello", "key"), "wrong")).not.toBe(
      "hello",
    ));
});
