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

import { isEmail, isURL, isPhoneNumber } from "./src/validation.js";

import { unique, groupBy, chunk } from "./src/array.js";

import { omit, pick, deepClone } from "./src/object.js";

import {
  generateUID,
  hashString,
  base64Encode,
  base64Decode,
} from "./src/security.js";

import { sum, average, median, factorial, min, max } from "./src/math.js";

import {
  hexToRgb,
  rgbToHex,
  isValidHex,
  lightenColor,
  darkenColor,
} from "./src/color.js";

import { parseURL, buildQueryString, parseQueryString } from "./src/url.js";

import { debounce, throttle, memoize } from "./src/performance.js";

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

// --- Validation ---
console.log("=== Validation ===");
console.log(isEmail("test@gmail.com")); // true
console.log(isEmail("notanemail")); // false
console.log(isEmail("missing@domain")); // false
console.log(isURL("https://google.com")); // true
console.log(isURL("notaurl")); // false
console.log(isPhoneNumber("+1234567890")); // true
console.log(isPhoneNumber("123")); // false

// --- Array ---
console.log("=== Array ===");
console.log(unique([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
console.log(unique(["a", "b", "a", "c"])); // ["a", "b", "c"]
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
console.log(chunk([1, 2, 3, 4, 5, 6], 3)); // [[1,2,3],[4,5,6]]
console.log(
  groupBy(
    [
      { type: "fruit", name: "apple" },
      { type: "veggie", name: "carrot" },
      { type: "fruit", name: "mango" },
    ],
    "type",
  ),
);
// { fruit: [{...}, {...}], veggie: [{...}] }

// --- Object ---
console.log("=== Object ===");
const user = { id: 1, name: "Harsh", password: "secret", age: 25 };

console.log(omit(user, ["password"])); // { id: 1, name: "Harsh", age: 25 }
console.log(omit(user, ["password", "age"])); // { id: 1, name: "Harsh" }
console.log(pick(user, ["id", "name"])); // { id: 1, name: "Harsh" }
console.log(pick(user, ["name", "age"])); // { name: "Harsh", age: 25 }

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 99;
console.log(original.b.c); // 2 (unchanged!)
console.log(cloned.b.c);

// --- Color ---
console.log("=== Color ===");
console.log(hexToRgb("#ff5733")); // { r: 255, g: 87, b: 51 }
console.log(hexToRgb("#ffffff")); // { r: 255, g: 255, b: 255 }
console.log(hexToRgb("#000000")); // { r: 0, g: 0, b: 0 }
console.log(rgbToHex(255, 87, 51)); // #ff5733
console.log(rgbToHex(0, 0, 0)); // #000000
console.log(isValidHex("#ff5733")); // true
console.log(isValidHex("#fff")); // true (3 digit hex)
console.log(isValidHex("notacolor")); // false
console.log(lightenColor("#ff5733", 20)); // lighter hex
console.log(darkenColor("#ff5733", 20)); // darker hex

// --- Security ---
console.log("=== Security ===");
console.log(generateUID()); // random 10 char string e.g. "x7f2k9q1m3"
console.log(generateUID(16)); // random 16 char string
console.log(hashString("hello")); // "99162322"
console.log(hashString("world")); // different hash
console.log(base64Encode("hello")); // "aGVsbG8="
console.log(base64Decode("aGVsbG8=")); // "hello"
console.log(base64Decode(base64Encode("snaputils"))); // "snaputils"

// --- Math ---
console.log("=== Math ===");
console.log(sum([1, 2, 3, 4, 5])); // 15
console.log(average([1, 2, 3, 4, 5])); // 3
console.log(median([1, 2, 3, 4, 5])); // 3
console.log(median([1, 2, 3, 4])); // 2.5
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(min([3, 1, 4, 1, 5, 9])); // 1
console.log(max([3, 1, 4, 1, 5, 9])); // 9

// --- URL ---
console.log("=== URL ===");
console.log(parseURL("https://example.com/path?foo=bar&baz=qux"));
// { protocol: "https:", host: "example.com", pathname: "/path", ... }

console.log(parseURL("not a url"));
// null

console.log(buildQueryString({ name: "harsh", age: 25, city: "goa" }));
// "name=harsh&age=25&city=goa"

console.log(parseQueryString("name=harsh&age=25&city=goa"));
// { name: "harsh", age: "25", city: "goa" }

console.log(parseQueryString("?name=harsh&age=25"));
// { name: "harsh", age: "25" }

// --- Performance ---
console.log("=== Performance ===");

// Test memoize
const expensiveFn = memoize((n) => {
  console.log(`computing ${n}...`);
  return n * 2;
});

console.log(expensiveFn(5)); // computing 5... → 10
console.log(expensiveFn(5)); // cached → 10 (no "computing" log)
console.log(expensiveFn(10)); // computing 10... → 20
console.log(expensiveFn(10)); // cached → 20 (no "computing" log)

// Test debounce
const debounced = debounce((msg) => console.log("debounced:", msg), 100);
debounced("first");
debounced("second");
debounced("third"); // only this one fires after 100ms

// Test throttle
const throttled = throttle((msg) => console.log("throttled:", msg), 100);
throttled("first"); // fires
throttled("second"); // ignored
throttled("third"); // ignored
