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
  generatePassword,
  initials,
  pluralize,
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

// --- More String ---
console.log("=== More String ===");
console.log(generatePassword()); // random 12 char strong password
console.log(generatePassword(16)); // random 16 char strong password
console.log(generatePassword(8)); // random 8 char strong password

console.log(initials("Harsh Yadav")); // "HY"
console.log(initials("John Doe Smith")); // "JDS"
console.log(initials("John")); // "J"

console.log(pluralize("item", 1)); // "1 item"
console.log(pluralize("item", 2)); // "2 items"
console.log(pluralize("item", 0)); // "0 items"
console.log(pluralize("person", 2, "people")); // "2 people"
console.log(pluralize("child", 3, "children")); // "3 children"

// --- Improved memoize ---
console.log("=== Improved Memoize ===");

const fn = memoize(
  (n) => {
    console.log(`computing ${n}...`);
    return n * 2;
  },
  { maxSize: 3 },
);

fn(1); // computing 1...
fn(2); // computing 2...
fn(3); // computing 3...
fn(1); // cached ⚡
fn(4); // computing 4... (evicts 1 from cache)
fn(1); // computing 1... (was evicted!)

// --- Improved truncate ---
console.log("=== Improved Truncate ===");
console.log(truncate("Hello World Everyone", 10));
// "Hello W..."

console.log(truncate("Hello World Everyone", 10, { position: "middle" }));
// "Hell...one"

console.log(truncate("Hello World Everyone", 10, { position: "start" }));
// "...Everyone"

console.log(truncate("Hello World Everyone", 10, { suffix: "--" }));
// "Hello Wor--"

// --- Improved formatDate ---
console.log("=== Improved formatDate ===");
console.log(formatDate("2024-01-15")); // January 15, 2024
console.log(formatDate("2024-01-15", "en-US", "short")); // Jan 15
console.log(formatDate("2024-01-15", "en-US", "long")); // January 15, 2024
console.log(formatDate("2024-01-15", "en-US", "full")); // Monday, January 15, 2024
console.log(formatDate("2024-01-15", "en-US", "numeric")); // 01/15/2024
console.log(formatDate("2024-01-15", "en-IN", "long")); // 15 January 2024

// --- Improved getContrastColor ---
console.log("=== Improved getContrastColor ===");

// hex input
console.log(getContrastColor("#ffffff")); // "#000000"
console.log(getContrastColor("#000000")); // "#ffffff"
console.log(getContrastColor("#6366f1")); // "#ffffff"

// RGB object input
console.log(getContrastColor({ r: 255, g: 255, b: 255 })); // "#000000"
console.log(getContrastColor({ r: 0, g: 0, b: 0 })); // "#ffffff"
console.log(getContrastColor({ r: 99, g: 102, b: 241 })); // "#ffffff"

// HSL object input
console.log(getContrastColor({ h: 0, s: 0, l: 100 })); // "#000000"
console.log(getContrastColor({ h: 0, s: 0, l: 0 })); // "#ffffff"

// --- Improved maskString ---
console.log("=== Improved maskString ===");
console.log(maskString("1234567890", 2, 2));
// "12******90"

console.log(maskString("1234567890", 2, 2, { maskChar: "#" }));
// "12######90"

console.log(maskString("1234567890", 4, 0, { reveal: "start" }));
// "1234******"

console.log(maskString("1234567890", 0, 4, { reveal: "end" }));
// "******7890"

console.log(maskString("4111111111111111", 4, 4, { maskChar: "•" }));
// "4111••••••••1111"

// --- Improved randomBetween ---
console.log("=== Improved randomBetween ===");
console.log(randomBetween(1, 10));
// random integer e.g. 7

console.log(randomBetween(1, 10, { float: true }));
// random float e.g. 7.23

console.log(randomBetween(1, 10, { float: true, decimals: 4 }));
// random float with 4 decimals e.g. 7.2341

console.log(randomBetween(1, 5, { exclude: [2, 3, 4] }));
// only returns 1 or 5

console.log(randomBetween(0, 1, { float: true, decimals: 6 }));
// random float between 0 and 1 e.g. 0.234156

// --- Improved groupBy ---
console.log("=== Improved groupBy ===");

// string key (existing behavior)
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
// { fruit: [...], veggie: [...] }

// function key (new behavior)
console.log(groupBy([1, 2, 3, 4, 5, 6], (n) => (n % 2 === 0 ? "even" : "odd")));
// { odd: [1, 3, 5], even: [2, 4, 6] }

console.log(
  groupBy(
    [
      { name: "Alice", age: 15 },
      { name: "Bob", age: 25 },
      { name: "Charlie", age: 17 },
      { name: "Diana", age: 30 },
    ],
    (item) => (item.age >= 18 ? "adult" : "minor"),
  ),
);
// { minor: [...], adult: [...] }

// --- Improved debounce ---
console.log("=== Improved Debounce ===");

// trailing (default) — fires after delay
const trailing = debounce((msg) => console.log("trailing:", msg), 100);
trailing("first");
trailing("second");
trailing("third"); // only this fires after 100ms

// leading — fires immediately on first call
const leading = debounce((msg) => console.log("leading:", msg), 100, {
  immediate: true,
});
leading("first"); // fires immediately!
leading("second"); // ignored
leading("third"); // ignored

setTimeout(() => {
  leading("after delay"); // fires immediately again after delay!
}, 200);

// --- Improved deepClone ---
console.log("=== Improved deepClone ===");

// regular object
const obj = { a: 1, b: { c: 2 } };
// const cloned = deepClone(obj);
cloned.b.c = 99;
console.log(obj.b.c); // 2 (unchanged)
console.log(cloned.b.c); // 99

// Date
const date = new Date("2024-01-15");
const clonedDate = deepClone(date);
console.log(clonedDate instanceof Date); // true
console.log(clonedDate.toISOString()); // 2024-01-15T00:00:00.000Z

// Map
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
const clonedMap = deepClone(map);
clonedMap.set("key1", "modified");
console.log(map.get("key1")); // "value1" (unchanged)
console.log(clonedMap.get("key1")); // "modified"

// Set
const set = new Set([1, 2, 3]);
const clonedSet = deepClone(set);
clonedSet.add(4);
console.log(set.size); // 3 (unchanged)
console.log(clonedSet.size); // 4

// circular reference
const circular = { a: 1 };
circular.self = circular;
const clonedCircular = deepClone(circular);
console.log(clonedCircular.a); // 1
console.log(clonedCircular.self === clonedCircular); // true

// --- Improved parseURL ---
console.log("=== Improved parseURL ===");

// full URL
const result = parseURL(
  "https://example.com:8080/path/to/page?foo=bar&baz=qux#section",
);
console.log(result.host); // "example.com:8080"
console.log(result.port); // "8080"
console.log(result.segments); // ["path", "to", "page"]
console.log(result.isAbsolute); // true
console.log(result.origin); // "https://example.com:8080"
console.log(result.hash); // "#section"

// relative URL
const relative = parseURL("/path/to/page?foo=bar");
console.log(relative.segments); // ["path", "to", "page"]
console.log(relative.isAbsolute); // false
console.log(relative.params); // { foo: "bar" }

// invalid URL
console.log(parseURL("notaurl")); // null

// --- Improved formatCurrency ---
console.log("=== Improved formatCurrency ===");
console.log(formatCurrency(1999.99, "USD"));
// "$1,999.99"

console.log(formatCurrency(1999.99, "USD", "en-US", { compact: true }));
// "$2K"

console.log(formatCurrency(1999999, "USD", "en-US", { compact: true }));
// "$2M"

console.log(formatCurrency(1999.99, "USD", "en-US", { decimals: 0 }));
// "$2,000"

console.log(formatCurrency(1999.99, "USD", "en-US", { decimals: 3 }));
// "$1,999.990"

console.log(formatCurrency(1999.99, "INR", "en-IN", { compact: true }));
// "₹2K"

// --- Improved isStrongPassword ---
console.log("=== Improved isStrongPassword ===");

// detailed feedback (default)
console.log(isStrongPassword("Hello@123"));
// { valid: true, errors: [] }

console.log(isStrongPassword("weak"));
// { valid: false, errors: ["Too short...", "Missing uppercase...", "Missing number...", "Missing special..."] }

console.log(isStrongPassword("NoSpecial1"));
// { valid: false, errors: ["Missing special character (@$!%*?&)"] }

// boolean mode (backward compatible)
console.log(isStrongPassword("Hello@123", { returnBoolean: true }));
// true

console.log(isStrongPassword("weak", { returnBoolean: true }));
// false

// custom min length
console.log(isStrongPassword("Hi@1", { minLength: 4, returnBoolean: true }));
// true

// --- Improved chunk ---
console.log("=== Improved chunk ===");

// default behavior
console.log(chunk([1, 2, 3, 4, 5], 2));
// [[1, 2], [3, 4], [5]]

// fill incomplete last chunk
console.log(chunk([1, 2, 3, 4, 5], 2, { fill: 0 }));
// [[1, 2], [3, 4], [5, 0]]

console.log(chunk([1, 2, 3, 4, 5], 3, { fill: null }));
// [[1, 2, 3], [4, 5, null]]

// balanced chunks
console.log(chunk([1, 2, 3, 4, 5, 6], 2, { balanced: true }));
// [[1, 2], [3, 4], [5, 6]]
