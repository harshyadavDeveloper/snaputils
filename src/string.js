// Capitalizes the first letter of a string
// capitalize("hello") → "Hello"
export function capitalize(str) {
  if (!str || typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Truncates a string and adds "..." if too long
// truncate("Hello World", 8) → "Hello..."
export function truncate(str, maxLength = 50, suffix = "...") {
  if (!str || typeof str !== "string") return "";
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
}

// Converts string to camelCase
// toCamelCase("hello world") → "helloWorld"
export function toCamelCase(str) {
  if (!str || typeof str !== "string") return "";
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
}

// Masks middle characters of a string
// maskString("1234567890", 2, 2) → "12******90"
export function maskString(
  str,
  visibleStart = 2,
  visibleEnd = 2,
  maskChar = "*",
) {
  if (!str || typeof str !== "string") return "";
  if (str.length <= visibleStart + visibleEnd) return str;
  const masked = maskChar.repeat(str.length - visibleStart - visibleEnd);
  return (
    str.slice(0, visibleStart) + masked + str.slice(str.length - visibleEnd)
  );
}

// Converts string to Title Case
// toTitleCase("hello world") → "Hello World"
export function toTitleCase(str) {
  if (!str || typeof str !== "string") return "";
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Checks if a string is a palindrome
// isPalindrome("racecar") → true
// isPalindrome("hello") → false
export function isPalindrome(str) {
  if (!str || typeof str !== "string") return false;
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

// Counts occurrences of a substring in a string
// countOccurrences("hello world hello", "hello") → 2
export function countOccurrences(str, substr) {
  if (!str || !substr) return 0;
  return str.split(substr).length - 1;
}

// Reverses a string
// reverseString("hello") → "olleh"
export function reverseString(str) {
  if (!str || typeof str !== "string") return "";
  return str.split("").reverse().join("");
}

// Counts the number of words in a string
// wordCount("hello world") → 2
export function wordCount(str) {
  if (!str || typeof str !== "string") return 0;
  return str.trim().split(/\s+/).filter(Boolean).length;
}
