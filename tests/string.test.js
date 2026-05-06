import {
  capitalize,
  truncate,
  toCamelCase,
  maskString,
  wordCount,
  toTitleCase,
  isPalindrome,
  countOccurrences,
  reverseString,
} from "../src/string.js";

describe("capitalize", () => {
  test("capitalizes first letter", () => expect(capitalize("hello")).toBe("Hello"));
  test("returns empty string for empty input", () => expect(capitalize("")).toBe(""));
  test("handles full uppercase", () => expect(capitalize("HELLO")).toBe("Hello"));
});

describe("truncate", () => {
  test("truncates long string", () => expect(truncate("Hello World", 8)).toBe("Hello..."));
  test("does not truncate short string", () => expect(truncate("Hi", 10)).toBe("Hi"));
  test("custom suffix", () => expect(truncate("Hello World", 7, "--")).toBe("Hello--"));
});

describe("toCamelCase", () => {
  test("converts space separated", () => expect(toCamelCase("hello world")).toBe("helloWorld"));
  test("converts hyphen separated", () => expect(toCamelCase("foo-bar-baz")).toBe("fooBarBaz"));
});

describe("maskString", () => {
  test("masks middle characters", () => expect(maskString("1234567890", 2, 2)).toBe("12******90"));
  test("returns string as is if too short", () => expect(maskString("hi", 2, 2)).toBe("hi"));
});

describe("wordCount", () => {
  test("counts words correctly", () => expect(wordCount("hello world foo")).toBe(3));
  test("handles extra spaces", () => expect(wordCount("  hello   world  ")).toBe(2));
});

describe("toTitleCase", () => {
  test("title cases a string", () => expect(toTitleCase("hello world")).toBe("Hello World"));
});

describe("isPalindrome", () => {
  test("detects palindrome", () => expect(isPalindrome("racecar")).toBe(true));
  test("detects non palindrome", () => expect(isPalindrome("hello")).toBe(false));
  test("ignores spaces and casing", () => expect(isPalindrome("A man a plan a canal Panama")).toBe(true));
});

describe("countOccurrences", () => {
  test("counts correctly", () => expect(countOccurrences("hello world hello", "hello")).toBe(2));
  test("returns 0 if not found", () => expect(countOccurrences("hello", "xyz")).toBe(0));
});

describe("reverseString", () => {
  test("reverses a string", () => expect(reverseString("hello")).toBe("olleh"));
  test("handles empty string", () => expect(reverseString("")).toBe(""));
});