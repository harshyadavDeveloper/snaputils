import {
  capitalize,
  truncate,
  maskString,
  toCamelCase,
  toTitleCase,
  isPalindrome,
  countOccurrences,
  reverseString,
} from "./src/string.js";

import {
  formatCurrency,
  formatPercent,
  abbreviateNumber,
  roundTo,
  isEven,
  isOdd,
  randomBetween,
  formatFileSize,
} from "./src/number.js";

import {
  formatDate,
  formatShortDate,
  timeAgo,
  daysBetween,
  addDays,
  isWeekend,
  isLeapYear,
  getDayName,
  getMonthName,
} from "./src/date.js";

// --- String ---
console.log("=== String ===");
console.log(capitalize("hello world")); // Hello world
console.log(truncate("Hello World everyone", 10)); // Hello W...
console.log(maskString("1234567890", 2, 2)); // 12******90
console.log(toCamelCase("hello world foo")); // helloWorldFoo
console.log(toTitleCase("hello world foo")); // Hello World Foo
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(countOccurrences("hello world hello", "hello")); // 2
console.log(reverseString("hello")); // olleh

// --- Number ---
console.log("=== Number ===");
console.log(formatCurrency(1999.99, "USD")); // $1,999.99
console.log(formatCurrency(1999.99, "INR", "en-IN")); // ₹1,999.99
console.log(formatPercent(0.856, 2)); // 85.60%
console.log(abbreviateNumber(2_500_000)); // 2.5M
console.log(roundTo(3.14159, 2)); // 3.14
console.log(isEven(4)); // true
console.log(isOdd(3)); // true
console.log(randomBetween(1, 10)); // random number between 1-10
console.log(formatFileSize(1024)); // 1.00 KB
console.log(formatFileSize(1048576)); // 1.00 MB
console.log(formatFileSize(1073741824)); // 1.00 GB

// --- Date ---
console.log("=== Date ===");
console.log(formatDate("2024-01-15")); // January 15, 2024
console.log(formatShortDate("2024-01-15")); // 01/15/2024
console.log(timeAgo(new Date(Date.now() - 3600000))); // 1 hour ago
console.log(daysBetween("2024-01-01", "2024-01-11")); // 10
console.log(addDays("2024-01-01", 5)); // 2024-01-06
console.log(isWeekend("2024-01-13")); // true (Saturday)
console.log(isWeekend("2024-01-15")); // false (Monday)
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false
console.log(getDayName("2024-01-15")); // Monday
console.log(getMonthName("2024-01-15")); // January
