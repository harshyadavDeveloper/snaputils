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

// Converts a string to a URL-friendly slug
// slugify("Hello World!") → "hello-world"
export function slugify(str) {
  if (!str || typeof str !== "string") return "";
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Strips HTML tags from a string
// stripHTML("<p>Hello <b>World</b></p>") → "Hello World"
export function stripHTML(str) {
  if (!str || typeof str !== "string") return "";
  return str.replace(/<[^>]*>/g, "");
}

// Extracts all email addresses from a string
// extractEmails("contact me at a@b.com or c@d.com") → ["a@b.com", "c@d.com"]
export function extractEmails(str) {
  if (!str || typeof str !== "string") return [];
  return str.match(/[^\s@]+@[^\s@]+\.[^\s@]+/g) || [];
}

// Extracts all URLs from a string
// extractURLs("visit https://google.com or http://github.com") → ["https://google.com", "http://github.com"]
export function extractURLs(str) {
  if (!str || typeof str !== "string") return [];
  return str.match(/https?:\/\/[^\s]+/g) || [];
}

// Generates a random strong password
// generatePassword(12) → "aB3$kL9@mN2!"
export function generatePassword(length = 12) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const special = "@$!%*?&";
  const all = lowercase + uppercase + numbers + special;
  const required = [
    lowercase[Math.floor(Math.random() * lowercase.length)],
    uppercase[Math.floor(Math.random() * uppercase.length)],
    numbers[Math.floor(Math.random() * numbers.length)],
    special[Math.floor(Math.random() * special.length)],
  ];
  const rest = Array.from(
    { length: length - 4 },
    () => all[Math.floor(Math.random() * all.length)]
  );
  return [...required, ...rest]
    .sort(() => Math.random() - 0.5)
    .join("");
}

// Returns initials from a full name
// initials("Harsh Yadav") → "HY"
// initials("John") → "J"
export function initials(name) {
  if (!name || typeof name !== "string") return "";
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase())
    .join("");
}

// Pluralizes a word based on count
// pluralize("item", 1) → "1 item"
// pluralize("item", 2) → "2 items"
// pluralize("person", 2, "people") → "2 people"
export function pluralize(word, count, plural) {
  if (!word || typeof word !== "string") return "";
  const pluralForm = plural || `${word}s`;
  return `${count} ${count === 1 ? word : pluralForm}`;
}
