// Generates a unique ID
// generateUID() → "x7f2k9q1m3"
export function generateUID(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length)),
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

// Generates a numeric OTP of given length
// generateOTP(6) → "482910"
export function generateOTP(length = 6) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
}

// Simple string encryption using a key
// encryptString("hello", "key") → encrypted string
export function encryptString(str, key) {
  if (!str || !key) return "";
  return str
    .split("")
    .map((char, i) =>
      String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
    )
    .map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
    .join("");
}

// Decrypts a string encrypted with encryptString
// decryptString(encrypted, "key") → "hello"
export function decryptString(str, key) {
  if (!str || !key) return "";
  try {
    return str
      .match(/.{1,2}/g)
      .map((hex) => String.fromCharCode(parseInt(hex, 16)))
      .map((char, i) =>
        String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
      )
      .join("");
  } catch {
    return "";
  }
}
