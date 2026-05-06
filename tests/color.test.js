import {
  hexToRgb,
  rgbToHex,
  isValidHex,
  lightenColor,
  darkenColor,
} from "../src/color.js";

describe("hexToRgb", () => {
  test("converts red", () =>
    expect(hexToRgb("#ff0000")).toEqual({ r: 255, g: 0, b: 0 }));
  test("converts black", () =>
    expect(hexToRgb("#000000")).toEqual({ r: 0, g: 0, b: 0 }));
  test("converts white", () =>
    expect(hexToRgb("#ffffff")).toEqual({ r: 255, g: 255, b: 255 }));
  test("returns null for invalid", () =>
    expect(hexToRgb("notacolor")).toBeNull());
});

describe("rgbToHex", () => {
  test("converts to hex", () => expect(rgbToHex(255, 0, 0)).toBe("#ff0000"));
  test("converts black", () => expect(rgbToHex(0, 0, 0)).toBe("#000000"));
  test("returns empty for invalid", () => expect(rgbToHex(300, 0, 0)).toBe(""));
});

describe("isValidHex", () => {
  test("valid 6 digit hex", () => expect(isValidHex("#ff5733")).toBe(true));
  test("valid 3 digit hex", () => expect(isValidHex("#fff")).toBe(true));
  test("invalid hex", () => expect(isValidHex("notacolor")).toBe(false));
  test("empty string", () => expect(isValidHex("")).toBe(false));
});

describe("lightenColor", () => {
  test("lightens a color", () => {
    const result = lightenColor("#000000", 50);
    expect(result).toBe("#808080");
  });
});

describe("darkenColor", () => {
  test("darkens a color", () => {
    const result = darkenColor("#ffffff", 50);
    expect(result).toBe("#808080");
  });
});
