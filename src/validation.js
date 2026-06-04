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

// Validates a strong password
// min 8 chars, uppercase, lowercase, number, special char
// isStrongPassword("Hello@123") → true
export function isStrongPassword(str) {
  if (!str || typeof str !== "string") return false;
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(str);
}

// Validates a username (alphanumeric + underscore, 3-20 chars)
// isUsername("harsh_dev") → true
export function isUsername(str) {
  if (!str || typeof str !== "string") return false;
  return /^[a-zA-Z0-9_]{3,20}$/.test(str);
}

// Validates a credit card number using Luhn algorithm
// isCreditCard("4111111111111111") → true
export function isCreditCard(str) {
  if (!str || typeof str !== "string") return false;
  const cleaned = str.replace(/\s|-/g, "");
  if (!/^\d{13,19}$/.test(cleaned)) return false;
  let sum = 0;
  let shouldDouble = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i]);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

// Validates a postal/zip code
// isPostalCode("400001", "IN") → true
// isPostalCode("90210", "US") → true
export function isPostalCode(str, locale = "US") {
  if (!str || typeof str !== "string") return false;
  const patterns = {
    US: /^\d{5}(-\d{4})?$/,
    IN: /^\d{6}$/,
    UK: /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i,
    CA: /^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/i,
    AU: /^\d{4}$/,
  };
  return patterns[locale] ? patterns[locale].test(str) : false;
}

// Validates an IP address (v4 or v6)
// isIPAddress("192.168.1.1") → true
export function isIPAddress(str) {
  if (!str || typeof str !== "string") return false;
  const ipv4 = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6 = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  if (ipv4.test(str)) {
    return str.split(".").every((n) => parseInt(n) <= 255);
  }
  return ipv6.test(str);
}