// String utilities
export {
  capitalize,
  truncate,
  toCamelCase,
  maskString,
  wordCount,
  toTitleCase,
  isPalindrome,
  countOccurrences,
  reverseString,
} from "./string.js";

// Number & currency utilities
export {
  formatCurrency,
  formatNumber,
  formatPercent,
  abbreviateNumber,
  roundTo,
  isEven,
  isOdd,
  randomBetween,
  formatFileSize,
} from "./number.js";

// Date & time utilities
export {
  formatDate,
  formatShortDate,
  timeAgo,
  isToday,
  daysBetween,
  addDays,
  isWeekend,
  isLeapYear,
  getDayName,
  getMonthName,
} from "./date.js";

// Validation utilities
export { isEmail, isURL, isPhoneNumber } from "./validation.js";

// Array utilities
export { unique, groupBy, chunk } from "./array.js";

// Object utilities
export { omit, pick, deepClone } from "./object.js";

// Color utilities
export {
  hexToRgb,
  rgbToHex,
  isValidHex,
  lightenColor,
  darkenColor,
} from "./color.js";

// Security utilities
export {
  generateUID,
  hashString,
  base64Encode,
  base64Decode,
} from "./security.js";

// Device utilities
export { isMobile, copyToClipboard, getScrollPosition } from "./device.js";

// Math utilities
export { sum, average, median, factorial, min, max } from "./math.js";

// URL utilities
export { parseURL, buildQueryString, parseQueryString } from "./url.js";

// Performance utilities
export { debounce, throttle, memoize } from "./performance.js";
