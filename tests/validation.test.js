import { isEmail, isURL, isPhoneNumber } from "../src/validation.js";

describe("isEmail", () => {
  test("valid email", () => expect(isEmail("test@gmail.com")).toBe(true));
  test("invalid email no @", () => expect(isEmail("notanemail")).toBe(false));
  test("invalid email no domain", () =>
    expect(isEmail("missing@domain")).toBe(false));
  test("empty string", () => expect(isEmail("")).toBe(false));
});

describe("isURL", () => {
  test("valid https URL", () => expect(isURL("https://google.com")).toBe(true));
  test("valid http URL", () => expect(isURL("http://example.com")).toBe(true));
  test("invalid URL", () => expect(isURL("notaurl")).toBe(false));
  test("empty string", () => expect(isURL("")).toBe(false));
});

describe("isPhoneNumber", () => {
  test("valid international", () =>
    expect(isPhoneNumber("+1234567890")).toBe(true));
  test("too short", () => expect(isPhoneNumber("123")).toBe(false));
  test("empty string", () => expect(isPhoneNumber("")).toBe(false));
});
