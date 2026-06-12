import {
  generateRandomColor,
  getContrastColor,
  hexToHsl,
  hslToHex,
} from "../src/color.js";

describe("generateRandomColor", () => {
  test("returns valid hex", () =>
    expect(generateRandomColor()).toMatch(/^#[0-9a-f]{6}$/));
  test("returns different colors", () =>
    expect(generateRandomColor()).not.toBe(generateRandomColor()));
});

describe("getContrastColor", () => {
  test("black on white", () =>
    expect(getContrastColor("#ffffff")).toBe("#000000"));
  test("white on black", () =>
    expect(getContrastColor("#000000")).toBe("#ffffff"));
});

describe("hexToHsl", () => {
  test("converts red", () =>
    expect(hexToHsl("#ff0000")).toEqual({ h: 0, s: 100, l: 50 }));
  test("converts white", () =>
    expect(hexToHsl("#ffffff")).toEqual({ h: 0, s: 0, l: 100 }));
  test("invalid hex returns null", () =>
    expect(hexToHsl("notacolor")).toBeNull());
});

describe("hslToHex", () => {
  test("converts red", () => expect(hslToHex(0, 100, 50)).toBe("#ff0000"));
  test("converts black", () => expect(hslToHex(0, 0, 0)).toBe("#000000"));
});
