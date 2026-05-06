// Validates an email address
// isEmail("test@gmail.com") → true
// isEmail("notanemail") → false
export function isEmail(str) {
  if (!str || typeof str !== "string") return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(str);
}

// Validates a URL
// isURL("https://google.com") → true
// isURL("notaurl") → false
export function isURL(str) {
  if (!str || typeof str !== "string") return false;
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

// Validates a phone number (international format)
// isPhoneNumber("+1234567890") → true
// isPhoneNumber("123") → false
export function isPhoneNumber(str) {
  if (!str || typeof str !== "string") return false;
  const regex = /^\+?[\d\s\-\(\)]{7,15}$/;
  return regex.test(str);
}