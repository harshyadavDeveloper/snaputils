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
  slugify,
  stripHTML,
  extractEmails,
  extractURLs,
  generatePassword,
  initials,
  pluralize,
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
export {
  isEmail,
  isURL,
  isPhoneNumber,
  isStrongPassword,
  isUsername,
  isCreditCard,
  isPostalCode,
  isIPAddress,
} from "./validation.js";

// Array utilities
export {
  unique,
  groupBy,
  chunk,
  flatten,
  shuffle,
  difference,
  intersection,
} from "./array.js";

// Object utilities
export { omit, pick, deepClone } from "./object.js";

// Color utilities
export {
  hexToRgb,
  rgbToHex,
  isValidHex,
  lightenColor,
  darkenColor,
  generateRandomColor,
  getContrastColor,
  hexToHsl,
  hslToHex,
} from "./color.js";

// Security utilities
export {
  generateUID,
  hashString,
  base64Encode,
  base64Decode,
  generateOTP,
  encryptString,
  decryptString,
} from "./security.js";

// Device utilities
export { isMobile, copyToClipboard, getScrollPosition } from "./device.js";

// Math utilities
export {
  sum,
  average,
  median,
  factorial,
  min,
  max,
  percentage,
  lerp,
  degreesToRadians,
  radiansToDegrees,
} from "./math.js";

// URL utilities
export { parseURL, buildQueryString, parseQueryString } from "./url.js";

// Performance utilities
export { debounce, throttle, memoize } from "./performance.js";

// React Hooks (requires React)
export {
  useDebounce,
  useLocalStorage,
  useMediaQuery,
  useOnClickOutside,
  useCopyToClipboard,
} from "./hook.js";

// Storage utilities
export { setItem, getItem, removeItem, clearAll, getKeys } from "./storage.js";
