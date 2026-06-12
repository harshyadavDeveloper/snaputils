import {
  percentage,
  lerp,
  degreesToRadians,
  radiansToDegrees,
} from "../src/math.js";

describe("percentage", () => {
  test("calculates correctly", () => expect(percentage(25, 200)).toBe(12.5));
  test("handles zero total", () => expect(percentage(25, 0)).toBe(0));
  test("100 percent", () => expect(percentage(100, 100)).toBe(100));
});

describe("lerp", () => {
  test("midpoint", () => expect(lerp(0, 100, 0.5)).toBe(50));
  test("start", () => expect(lerp(0, 100, 0)).toBe(0));
  test("end", () => expect(lerp(0, 100, 1)).toBe(100));
});

describe("degreesToRadians", () => {
  test("180 degrees", () => expect(degreesToRadians(180)).toBeCloseTo(Math.PI));
  test("90 degrees", () =>
    expect(degreesToRadians(90)).toBeCloseTo(Math.PI / 2));
});

describe("radiansToDegrees", () => {
  test("PI radians", () => expect(radiansToDegrees(Math.PI)).toBeCloseTo(180));
  test("PI/2 radians", () =>
    expect(radiansToDegrees(Math.PI / 2)).toBeCloseTo(90));
});
