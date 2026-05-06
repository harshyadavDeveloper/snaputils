import {
  formatDate,
  formatShortDate,
  isToday,
  daysBetween,
  addDays,
  isWeekend,
  isLeapYear,
  getDayName,
  getMonthName,
} from "../src/date.js";

describe("formatDate", () => {
  test("formats date correctly", () => expect(formatDate("2024-01-15")).toBe("January 15, 2024"));
  test("returns invalid for bad date", () => expect(formatDate("bad")).toBe("Invalid date"));
});

describe("formatShortDate", () => {
  test("formats to MM/DD/YYYY", () => expect(formatShortDate("2024-01-15")).toBe("01/15/2024"));
  test("returns invalid for bad date", () => expect(formatShortDate("bad")).toBe("Invalid date"));
});

describe("isToday", () => {
  test("returns true for today", () => expect(isToday(new Date())).toBe(true));
  test("returns false for past date", () => expect(isToday("2000-01-01")).toBe(false));
});

describe("daysBetween", () => {
  test("calculates days correctly", () => expect(daysBetween("2024-01-01", "2024-01-11")).toBe(10));
  test("handles reversed dates", () => expect(daysBetween("2024-01-11", "2024-01-01")).toBe(10));
});

describe("addDays", () => {
  test("adds days correctly", () => {
    const result = addDays("2024-01-01", 5);
    expect(result.getDate()).toBe(6);
  });
  test("handles negative days", () => {
    const result = addDays("2024-01-10", -5);
    expect(result.getDate()).toBe(5);
  });
});

describe("isWeekend", () => {
  test("returns true for Saturday", () => expect(isWeekend("2024-01-13")).toBe(true));
  test("returns true for Sunday", () => expect(isWeekend("2024-01-14")).toBe(true));
  test("returns false for Monday", () => expect(isWeekend("2024-01-15")).toBe(false));
  test("returns false for invalid date", () => expect(isWeekend("bad")).toBe(false));
});

describe("isLeapYear", () => {
  test("returns true for leap year", () => expect(isLeapYear(2024)).toBe(true));
  test("returns false for non leap year", () => expect(isLeapYear(2023)).toBe(false));
  test("handles century years", () => expect(isLeapYear(1900)).toBe(false));
  test("handles 400 year rule", () => expect(isLeapYear(2000)).toBe(true));
});

describe("getDayName", () => {
  test("returns correct day name", () => expect(getDayName("2024-01-15")).toBe("Monday"));
  test("returns invalid for bad date", () => expect(getDayName("bad")).toBe("Invalid date"));
});

describe("getMonthName", () => {
  test("returns correct month name", () => expect(getMonthName("2024-01-15")).toBe("January"));
  test("returns invalid for bad date", () => expect(getMonthName("bad")).toBe("Invalid date"));
});