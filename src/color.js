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
