import {
  formatCurrency,
  formatNumber,
  formatPercent,
  abbreviateNumber,
  roundTo,
  isEven,
  isOdd,
  randomBetween,
  formatFileSize,
} from "../src/number.js";

describe("formatCurrency", () => {
  test("formats USD", () => expect(formatCurrency(1234.5, "USD", "en-US")).toBe("$1,234.50"));
  test("formats INR", () => expect(formatCurrency(1234.5, "INR", "en-IN")).toBe("₹1,234.50"));
  test("returns empty for NaN", () => expect(formatCurrency(NaN)).toBe(""));
});

describe("formatNumber", () => {
  test("adds thousand separators", () => expect(formatNumber(1000000)).toBe("1,000,000"));
  test("returns empty for NaN", () => expect(formatNumber(NaN)).toBe(""));
});

describe("formatPercent", () => {
  test("formats percentage", () => expect(formatPercent(0.75)).toBe("75.0%"));
  test("custom decimals", () => expect(formatPercent(0.1234, 2)).toBe("12.34%"));
  test("returns empty for NaN", () => expect(formatPercent(NaN)).toBe(""));
});

describe("abbreviateNumber", () => {
  test("abbreviates thousands", () => expect(abbreviateNumber(1500)).toBe("1.5K"));
  test("abbreviates millions", () => expect(abbreviateNumber(2_000_000)).toBe("2.0M"));
  test("abbreviates billions", () => expect(abbreviateNumber(3_500_000_000)).toBe("3.5B"));
  test("handles negative", () => expect(abbreviateNumber(-1500)).toBe("-1.5K"));
});

describe("roundTo", () => {
  test("rounds to 2 decimals", () => expect(roundTo(3.14159, 2)).toBe(3.14));
  test("rounds to 0 decimals", () => expect(roundTo(3.7, 0)).toBe(4));
  test("returns NaN for invalid", () => expect(roundTo(NaN)).toBeNaN());
});

describe("isEven", () => {
  test("returns true for even", () => expect(isEven(4)).toBe(true));
  test("returns false for odd", () => expect(isEven(3)).toBe(false));
  test("handles zero", () => expect(isEven(0)).toBe(true));
});

describe("isOdd", () => {
  test("returns true for odd", () => expect(isOdd(3)).toBe(true));
  test("returns false for even", () => expect(isOdd(4)).toBe(false));
});

describe("randomBetween", () => {
  test("returns number within range", () => {
    const result = randomBetween(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });
});

describe("formatFileSize", () => {
  test("formats bytes", () => expect(formatFileSize(0)).toBe("0 Bytes"));
  test("formats KB", () => expect(formatFileSize(1024)).toBe("1.00 KB"));
  test("formats MB", () => expect(formatFileSize(1048576)).toBe("1.00 MB"));
  test("formats GB", () => expect(formatFileSize(1073741824)).toBe("1.00 GB"));
  test("returns empty for NaN", () => expect(formatFileSize(NaN)).toBe(""));
});