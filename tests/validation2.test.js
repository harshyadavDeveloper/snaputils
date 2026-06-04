import {
  isStrongPassword,
  isUsername,
  isCreditCard,
  isPostalCode,
  isIPAddress,
} from "../src/validation.js";

describe("isStrongPassword", () => {
  test("valid strong password", () =>
    expect(isStrongPassword("Hello@123")).toBe(true));
  test("no special char", () =>
    expect(isStrongPassword("Hello1234")).toBe(false));
  test("too short", () => expect(isStrongPassword("Hi@1")).toBe(false));
  test("no uppercase", () => expect(isStrongPassword("hello@123")).toBe(false));
});

describe("isUsername", () => {
  test("valid username", () => expect(isUsername("harsh_dev")).toBe(true));
  test("too short", () => expect(isUsername("ab")).toBe(false));
  test("has space", () => expect(isUsername("has space")).toBe(false));
  test("too long", () => expect(isUsername("a".repeat(21))).toBe(false));
});

describe("isCreditCard", () => {
  test("valid visa", () => expect(isCreditCard("4111111111111111")).toBe(true));
  test("invalid number", () =>
    expect(isCreditCard("1234567890123456")).toBe(false));
  test("empty string", () => expect(isCreditCard("")).toBe(false));
});

describe("isPostalCode", () => {
  test("valid US zip", () => expect(isPostalCode("90210", "US")).toBe(true));
  test("valid IN pin", () => expect(isPostalCode("400001", "IN")).toBe(true));
  test("invalid IN pin", () => expect(isPostalCode("12345", "IN")).toBe(false));
});

describe("isIPAddress", () => {
  test("valid IPv4", () => expect(isIPAddress("192.168.1.1")).toBe(true));
  test("invalid IPv4", () => expect(isIPAddress("256.0.0.1")).toBe(false));
  test("invalid string", () => expect(isIPAddress("not an ip")).toBe(false));
});
