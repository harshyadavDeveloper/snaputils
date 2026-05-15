// Generates a unique ID
// generateUID() → "x7f2k9q1m3"
export function generateUID(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
}

// Simple hash function for a string
// hashString("hello") → "99162322"
export function hashString(str) {
  if (!str || typeof str !== "string") return "";
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString();
}

// Encodes a string to Base64
// base64Encode("hello") → "aGVsbG8="
export function base64Encode(str) {
  if (!str || typeof str !== "string") return "";
  return btoa(str);
}

// Decodes a Base64 string
// base64Decode("aGVsbG8=") → "hello"
export function base64Decode(str) {
  if (!str || typeof str !== "string") return "";
  try {
    return atob(str);
  } catch {
    return "";
  }
}