<div align="center">

# snaputils

**A lightweight, zero-dependency utility library for JavaScript & React apps.**

70+ utilities across 15 categories — string, number, date, validation,  
array, object, color, security, math, URL, performance, and React hooks.

[![npm](https://img.shields.io/npm/v/@dungeonmaster/snaputils)](https://www.npmjs.com/package/@dungeonmaster/snaputils)
[![downloads](https://img.shields.io/npm/dw/@dungeonmaster/snaputils)](https://www.npmjs.com/package/@dungeonmaster/snaputils)
[![license](https://img.shields.io/npm/l/@dungeonmaster/snaputils)](https://github.com/harshyadavDeveloper/snaputils/blob/main/LICENSE)
[![types](https://img.shields.io/npm/types/@dungeonmaster/snaputils)](https://www.npmjs.com/package/@dungeonmaster/snaputils)
[![GitHub discussions](https://img.shields.io/github/discussions/harshyadavDeveloper/snaputils)](https://github.com/harshyadavDeveloper/snaputils/discussions)

🌐 **[Live Demo → demo-snaputil.netlify.app](https://demo-snaputil.netlify.app/)**

</div>

---

## 📦 Installation

```bash
npm install @dungeonmaster/snaputils
```

---

## 🚀 Quick Start

```js
import { 
  capitalize, 
  formatCurrency, 
  timeAgo, 
  isEmail,
  unique,
  hexToRgb
} from '@dungeonmaster/snaputils';

capitalize('hello world');           // "Hello World"
formatCurrency(1999.99, 'USD');      // "$1,999.99"
timeAgo(new Date('2024-01-01'));     // "5 months ago"
isEmail('test@gmail.com');           // true
unique([1, 2, 2, 3]);               // [1, 2, 3]
hexToRgb('#ff5733');                 // { r: 255, g: 87, b: 51 }
```

---

## TypeScript Support

Built-in type definitions — no `@types/` package needed.

```ts
import { formatCurrency, isLeapYear, capitalize } from '@dungeonmaster/snaputils';

formatCurrency(1999.99, 'USD'); // ✅ autocomplete works
isLeapYear(2024);               // ✅ type checked
capitalize('hello');            // ✅ type checked
```

---

## 🛠️ What's Included

| # | Category | Highlights |
|---|---|---|
| 1 | [String](#-string-utilities) | capitalize, truncate, mask, camelCase, password generator |
| 2 | [Number & Currency](#-number--currency-utilities) | formatCurrency, abbreviateNumber, formatFileSize |
| 3 | [Date & Time](#-date--time-utilities) | timeAgo, formatDate, daysBetween, isWeekend |
| 4 | [Validation](#-validation-utilities) | isEmail, isURL, isPhoneNumber |
| 5 | [Array](#-array-utilities) | unique, groupBy, chunk |
| 6 | [Object](#-object-utilities) | pick, omit, deepClone |
| 7 | [Color](#-color-utilities) | hexToRgb, lighten, darken, getContrastColor |
| 8 | [Security](#-security-utilities) | generateUID, hashString, base64, encrypt/decrypt, OTP |
| 9 | [Device](#-device-utilities) | isMobile, copyToClipboard, getScrollPosition |
| 10 | [Math](#-math-utilities) | sum, average, median, factorial, lerp |
| 11 | [URL](#-url-utilities) | parseURL, buildQueryString, parseQueryString |
| 12 | [Performance](#-performance-utilities) | debounce, throttle, memoize |
| 13 | [React Hooks](#-react-hooks) | useDebounce, useLocalStorage, useMediaQuery |
| 14 | [Form Validation](#-form-validation) | isStrongPassword, isCreditCard, isPostalCode |
| 15 | [Storage](#-storage-utilities) | setItem, getItem, clearAll |

---

## 🔤 String Utilities

| Function | Description | Example |
|---|---|---|
| `capitalize(str)` | Capitalize first letter | `"hello"` → `"Hello"` |
| `truncate(str, max)` | Truncate with ellipsis | `"Hello World"` → `"Hello..."` |
| `toCamelCase(str)` | Convert to camelCase | `"hello world"` → `"helloWorld"` |
| `maskString(str, start, end)` | Mask middle characters | `"1234567890"` → `"12******90"` |
| `toTitleCase(str)` | Title case a string | `"hello world"` → `"Hello World"` |
| `isPalindrome(str)` | Check if palindrome | `"racecar"` → `true` |
| `countOccurrences(str, substr)` | Count substring occurrences | `2` |
| `reverseString(str)` | Reverse a string | `"hello"` → `"olleh"` |
| `wordCount(str)` | Count words | `"hello world"` → `2` |
| `generatePassword(length?)` | Generate strong password | `"aB3$kL9@mN2!"` |
| `initials(name)` | Get initials from name | `"Harsh Yadav"` → `"HY"` |
| `pluralize(word, count, plural?)` | Pluralize a word | `"2 items"` |

---

## 🔢 Number & Currency Utilities

| Function | Description | Example |
|---|---|---|
| `formatCurrency(amount, currency, locale)` | Format as currency | `1999.99` → `"$1,999.99"` |
| `formatNumber(num)` | Add thousand separators | `1000000` → `"1,000,000"` |
| `formatPercent(value)` | Format as percentage | `0.75` → `"75.0%"` |
| `abbreviateNumber(num)` | Shorten large numbers | `1500000` → `"1.5M"` |
| `roundTo(num, decimals)` | Round to decimal places | `3.14159` → `3.14` |
| `isEven(num)` | Check if even | `4` → `true` |
| `isOdd(num)` | Check if odd | `3` → `true` |
| `randomBetween(min, max)` | Random number in range | `randomBetween(1, 10)` → `7` |
| `formatFileSize(bytes)` | Format bytes to readable size | `1024` → `"1.00 KB"` |

---

## 📅 Date & Time Utilities

| Function | Description | Example |
|---|---|---|
| `formatDate(date)` | Full date string | `"January 15, 2024"` |
| `formatShortDate(date)` | MM/DD/YYYY format | `"01/15/2024"` |
| `formatTime(date)` | 12-hour time | `"02:30 PM"` |
| `timeAgo(date)` | Relative time | `"2 hours ago"` |
| `daysBetween(d1, d2)` | Days between dates | `10` |
| `addDays(date, days)` | Add days to date | Returns new `Date` |
| `isWeekend(date)` | Check if date is weekend | `true / false` |
| `isLeapYear(year)` | Check if leap year | `2024` → `true` |
| `getDayName(date)` | Get day name | `"Monday"` |
| `getMonthName(date)` | Get month name | `"January"` |
| `isToday(date)` | Check if date is today | `true / false` |

---

## ✅ Validation Utilities

| Function | Description | Example |
|---|---|---|
| `isEmail(str)` | Validate email format | `"test@gmail.com"` → `true` |
| `isURL(str)` | Validate URL format | `"https://google.com"` → `true` |
| `isPhoneNumber(str)` | Validate phone number | `"+1234567890"` → `true` |

---

## 🔢 Array Utilities

| Function | Description | Example |
|---|---|---|
| `unique(arr)` | Remove duplicates | `[1,2,2,3]` → `[1,2,3]` |
| `groupBy(arr, key)` | Group objects by key | `{fruit: [...], veggie: [...]}` |
| `chunk(arr, size)` | Split into chunks | `[1,2,3,4,5]` → `[[1,2],[3,4],[5]]` |

---

## 🔧 Object Utilities

| Function | Description | Example |
|---|---|---|
| `omit(obj, keys)` | Remove keys from object | `{a:1, b:2}` → `{a:1}` |
| `pick(obj, keys)` | Pick keys from object | `{a:1, b:2}` → `{b:2}` |
| `deepClone(obj)` | Deep clone an object | Returns new reference |

---

## 🎨 Color Utilities

| Function | Description | Example |
|---|---|---|
| `hexToRgb(hex)` | Hex to RGB object | `"#ff5733"` → `{r:255, g:87, b:51}` |
| `rgbToHex(r,g,b)` | RGB to hex string | `255,87,51` → `"#ff5733"` |
| `isValidHex(hex)` | Validate hex color | `"#ff5733"` → `true` |
| `lightenColor(hex, percent)` | Lighten a color | lighter hex |
| `darkenColor(hex, percent)` | Darken a color | darker hex |
| `generateRandomColor()` | Random hex color | `"#a3f2c1"` |
| `getContrastColor(hex)` | Black or white for contrast | `"#000000"` |
| `hexToHsl(hex)` | Hex to HSL | `{ h: 0, s: 100, l: 50 }` |
| `hslToHex(h, s, l)` | HSL to hex | `"#ff0000"` |

---

## 🔐 Security Utilities

| Function | Description | Example |
|---|---|---|
| `generateUID(length?)` | Generate unique ID | `"x7f2k9q1m3"` |
| `hashString(str)` | Hash a string | `"99162322"` |
| `base64Encode(str)` | Encode to Base64 | `"aGVsbG8="` |
| `base64Decode(str)` | Decode from Base64 | `"hello"` |
| `generateOTP(length?)` | Generate numeric OTP | `"482910"` |
| `encryptString(str, key)` | Encrypt a string | encrypted hex |
| `decryptString(str, key)` | Decrypt a string | `"hello"` |

---

## 📱 Device Utilities

| Function | Description | Example |
|---|---|---|
| `isMobile()` | Detect mobile device | `true / false` |
| `copyToClipboard(text)` | Copy text to clipboard | `true / false` |
| `getScrollPosition()` | Get scroll position | `{ x: 0, y: 200 }` |

---

## 🧮 Math Utilities

| Function | Description | Example |
|---|---|---|
| `sum(arr)` | Sum of array | `[1,2,3]` → `6` |
| `average(arr)` | Average of array | `[1,2,3]` → `2` |
| `median(arr)` | Median of array | `[1,2,3]` → `2` |
| `factorial(n)` | Factorial of n | `5` → `120` |
| `min(arr)` | Minimum value | `[3,1,2]` → `1` |
| `max(arr)` | Maximum value | `[3,1,2]` → `3` |
| `percentage(value, total)` | Calculate percentage | `25, 200` → `12.5` |
| `lerp(start, end, t)` | Linear interpolation | `0, 100, 0.5` → `50` |
| `degreesToRadians(deg)` | Degrees to radians | `180` → `3.14` |
| `radiansToDegrees(rad)` | Radians to degrees | `3.14` → `180` |

---

## 🌍 URL Utilities

| Function | Description | Example |
|---|---|---|
| `parseURL(url)` | Parse URL into parts | `{ host, pathname, params }` |
| `buildQueryString(obj)` | Object to query string | `"name=harsh&age=25"` |
| `parseQueryString(str)` | Query string to object | `{ name: "harsh" }` |

---

## ⏱️ Performance Utilities

| Function | Description | Example |
|---|---|---|
| `debounce(fn, delay?)` | Debounce a function | fires after delay |
| `throttle(fn, limit?)` | Throttle a function | fires once per limit |
| `memoize(fn)` | Cache function results | returns cached result |

---

## 🪝 React Hooks

```bash
# React is a peer dependency — make sure it's installed
npm install react
```

| Hook | Description | Returns |
|---|---|---|
| `useDebounce(value, delay?)` | Debounce a value | debounced value |
| `useLocalStorage(key, default)` | Persist state to localStorage | `[value, setter]` |
| `useMediaQuery(query)` | Match a media query | `boolean` |
| `useOnClickOutside(ref, handler)` | Detect outside clicks | `void` |
| `useCopyToClipboard()` | Copy text to clipboard | `[copied, copy]` |

---

## 📝 Form Validation

| Function | Description | Example |
|---|---|---|
| `isStrongPassword(str)` | Validate strong password | `"Hello@123"` → `true` |
| `isUsername(str)` | Validate username | `"harsh_dev"` → `true` |
| `isCreditCard(str)` | Validate credit card | `"4111..."` → `true` |
| `isPostalCode(str, locale?)` | Validate postal code | `"400001", "IN"` → `true` |
| `isIPAddress(str)` | Validate IP address | `"192.168.1.1"` → `true` |

---

## 💾 Storage Utilities

| Function | Description | Example |
|---|---|---|
| `setItem(key, value)` | Save to localStorage | `true / false` |
| `getItem(key, default?)` | Get from localStorage | parsed value |
| `removeItem(key)` | Remove from localStorage | `true / false` |
| `clearAll()` | Clear localStorage | `true / false` |
| `getKeys()` | Get all keys | `["key1", "key2"]` |

---

## 🤝 Community

| | |
|---|---|
| 💡 Feature Requests | [Suggest a utility](https://github.com/harshyadavDeveloper/snaputils/discussions/categories/feature-requests) |
| 🐛 Bug Reports | [Report an issue](https://github.com/harshyadavDeveloper/snaputils/discussions/categories/bug-reports) |
| 🙋 Q&A | [Ask a question](https://github.com/harshyadavDeveloper/snaputils/discussions/categories/q-a) |
| 🎉 Show and Tell | [Share your project](https://github.com/harshyadavDeveloper/snaputils/discussions/categories/show-and-tell) |

---

## 📄 License

MIT License — free to use and modify.

---

<div align="center">

Built by [Harsh Yadav](https://github.com/harshyadavDeveloper) · [Portfolio](https://harsh-myportfolio.netlify.app/) · [LinkedIn](https://linkedin.com/in/harsh-yadav-041062254)

</div>
