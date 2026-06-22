// Converts a hex color to RGB
// hexToRgb("#ff5733") → { r: 255, g: 87, b: 51 }
export function hexToRgb(hex) {
  if (!hex || typeof hex !== "string") return null;
  const cleaned = hex.replace("#", "");
  if (cleaned.length !== 6) return null;
  return {
    r: parseInt(cleaned.substring(0, 2), 16),
    g: parseInt(cleaned.substring(2, 4), 16),
    b: parseInt(cleaned.substring(4, 6), 16),
  };
}

// Converts RGB values to a hex color
// rgbToHex(255, 87, 51) → "#ff5733"
export function rgbToHex(r, g, b) {
  if ([r, g, b].some((v) => isNaN(v) || v < 0 || v > 255)) return "";
  return (
    "#" +
    [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")
  );
}

// Checks if a string is a valid hex color
// isValidHex("#ff5733") → true
// isValidHex("notacolor") → false
export function isValidHex(hex) {
  if (!hex || typeof hex !== "string") return false;
  return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex);
}

// Lightens a hex color by a percentage
// lightenColor("#ff5733", 20) → lighter version
export function lightenColor(hex, percent) {
  const rgb = hexToRgb(hex);
  if (!rgb) return "";
  const adjust = (value) =>
    Math.min(255, Math.round(value + (255 - value) * (percent / 100)));
  return rgbToHex(adjust(rgb.r), adjust(rgb.g), adjust(rgb.b));
}

// Darkens a hex color by a percentage
// darkenColor("#ff5733", 20) → darker version
export function darkenColor(hex, percent) {
  const rgb = hexToRgb(hex);
  if (!rgb) return "";
  const adjust = (value) =>
    Math.max(0, Math.round(value * (1 - percent / 100)));
  return rgbToHex(adjust(rgb.r), adjust(rgb.g), adjust(rgb.b));
}

// Generates a random hex color
// generateRandomColor() → "#a3f2c1"
export function generateRandomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
  );
}

// Returns black or white depending on background color for best contrast
// accepts hex, rgb object, or hsl object
// getContrastColor("#ffffff") → "#000000"
// getContrastColor({ r: 255, g: 255, b: 255 }) → "#000000"
// getContrastColor({ h: 0, s: 0, l: 100 }) → "#000000"
export function getContrastColor(color) {
  let rgb;

  if (typeof color === "string") {
    // hex input
    rgb = hexToRgb(color);
  } else if (typeof color === "object" && color !== null) {
    if ("r" in color && "g" in color && "b" in color) {
      // RGB object input
      rgb = color;
    } else if ("h" in color && "s" in color && "l" in color) {
      // HSL object input — convert to hex first then to rgb
      const hex = hslToHex(color.h, color.s, color.l);
      rgb = hexToRgb(hex);
    }
  }

  if (!rgb) return "#000000";
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.5 ? "#000000" : "#ffffff";
}

// Converts hex to HSL
// hexToHsl("#ff0000") → { h: 0, s: 100, l: 50 }
export function hexToHsl(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s;
  const l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

// Converts HSL to hex
// hslToHex(0, 100, 50) → "#ff0000"
export function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const toHex = (n) =>
    Math.round(255 * f(n))
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(0)}${toHex(8)}${toHex(4)}`;
}
