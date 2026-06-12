import {
  capitalize,
  truncate,
  maskString,
  toCamelCase,
  toTitleCase,
  isPalindrome,
  countOccurrences,
  reverseString,
  slugify,
  stripHTML,
  extractEmails,
  extractURLs,
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

import {
  isEmail,
  isURL,
  isPhoneNumber,
  isStrongPassword,
  isUsername,
  isCreditCard,
  isPostalCode,
  isIPAddress,
} from "./src/validation.js";

import { unique, groupBy, chunk } from "./src/array.js";

import { omit, pick, deepClone } from "./src/object.js";

import {
  generateUID,
  hashString,
  base64Encode,
  base64Decode,
  generateOTP,
  encryptString,
  decryptString,
} from "./src/security.js";

import {
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
} from "./src/math.js";

import {
  hexToRgb,
  rgbToHex,
  isValidHex,
  lightenColor,
  darkenColor,
  generateRandomColor,
  getContrastColor,
  hexToHsl,
  hslToHex,
} from "./src/color.js";

import { parseURL, buildQueryString, parseQueryString } from "./src/url.js";

import { debounce, throttle, memoize } from "./src/performance.js";

import { flatten, shuffle, difference, intersection } from "./src/array.js";

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

// --- Form Validation ---
console.log("=== Form Validation ===");
console.log(isStrongPassword("Hello@123")); // true
console.log(isStrongPassword("weakpass")); // false
console.log(isStrongPassword("NoSpecial1")); // false

console.log(isUsername("harsh_dev")); // true
console.log(isUsername("ab")); // false (too short)
console.log(isUsername("has space")); // false

console.log(isCreditCard("4111111111111111")); // true (Visa test)
console.log(isCreditCard("1234567890123456")); // false

console.log(isPostalCode("400001", "IN")); // true
console.log(isPostalCode("90210", "US")); // true
console.log(isPostalCode("12345", "IN")); // false (US zip in IN)

console.log(isIPAddress("192.168.1.1")); // true
console.log(isIPAddress("256.0.0.1")); // false
console.log(isIPAddress("not an ip")); // false

// --- String Extras ---
console.log("=== String Extras ===");
console.log(slugify("Hello World!")); // hello-world
console.log(slugify("  My Blog Post Title  ")); // my-blog-post-title
console.log(slugify("What's up? Nothing!")); // whats-up-nothing

console.log(stripHTML("<p>Hello <b>World</b></p>")); // Hello World
console.log(stripHTML("<h1>Title</h1><p>Body</p>")); // TitleBody
console.log(stripHTML("No tags here")); // No tags here

console.log(extractEmails("contact a@b.com or c@d.com")); // ["a@b.com", "c@d.com"]
console.log(extractEmails("no emails here")); // []

console.log(extractURLs("visit https://google.com or https://github.com")); // ["https://google.com", "https://github.com"]
console.log(extractURLs("no urls here")); // []

// --- Array Extras ---
console.log("=== Array Extras ===");
console.log(flatten([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
console.log(flatten([1, [2, [3, [4]]]], 1)); // [1, 2, [3, [4]]]
console.log(flatten([1, [2, [3, [4]]]], 2)); // [1, 2, 3, [4]]

console.log(shuffle([1, 2, 3, 4, 5])); // random order
console.log(shuffle([1, 2, 3, 4, 5])); // different random order

console.log(difference([1, 2, 3, 4], [2, 3])); // [1, 4]
console.log(difference([1, 2, 3], [4, 5, 6])); // [1, 2, 3]

console.log(intersection([1, 2, 3, 4], [2, 3, 5])); // [2, 3]
console.log(intersection([1, 2, 3], [4, 5, 6])); // []

// --- More Security ---
console.log("=== More Security ===");
console.log(generateOTP()); // random 6 digit OTP e.g. "482910"
console.log(generateOTP(4)); // random 4 digit OTP e.g. "2891"
console.log(generateOTP(8)); // random 8 digit OTP e.g. "48291037"

const encrypted = encryptString("hello world", "mykey");
console.log(encrypted); // encrypted hex string
console.log(decryptString(encrypted, "mykey")); // "hello world"

const encrypted2 = encryptString("snaputils is awesome", "secret");
console.log(decryptString(encrypted2, "secret")); // "snaputils is awesome"
console.log(decryptString(encrypted2, "wrongkey")); // garbage output

// --- More Color ---
console.log("=== More Color ===");
console.log(generateRandomColor()); // random hex e.g. "#a3f2c1"
console.log(generateRandomColor()); // different random hex

console.log(getContrastColor("#ffffff")); // "#000000" (black on white)
console.log(getContrastColor("#000000")); // "#ffffff" (white on black)
console.log(getContrastColor("#6366f1")); // "#ffffff" (white on indigo)

console.log(hexToHsl("#ff0000")); // { h: 0, s: 100, l: 50 }
console.log(hexToHsl("#6366f1")); // { h: 239, s: 84, l: 58 }
console.log(hexToHsl("#ffffff")); // { h: 0, s: 0, l: 100 }

console.log(hslToHex(0, 100, 50)); // "#ff0000"
console.log(hslToHex(239, 84, 58)); // close to "#6366f1"

// --- More Math ---
console.log("=== More Math ===");
console.log(percentage(25, 200)); // 12.5
console.log(percentage(1, 3)); // 33.33
console.log(percentage(50, 100)); // 50

console.log(lerp(0, 100, 0.5)); // 50
console.log(lerp(0, 100, 0.25)); // 25
console.log(lerp(10, 20, 0.5)); // 15

console.log(degreesToRadians(180)); // 3.141592653589793
console.log(degreesToRadians(90)); // 1.5707963267948966
console.log(degreesToRadians(360)); // 6.283185307179586

console.log(radiansToDegrees(Math.PI)); // 180
console.log(radiansToDegrees(Math.PI / 2)); // 90
console.log(radiansToDegrees(Math.PI * 2)); // 360
