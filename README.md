# @dungeonmaster/snaputils

![npm](https://img.shields.io/npm/v/@dungeonmaster/snaputils)
![license](https://img.shields.io/npm/l/@dungeonmaster/snaputils)
![types](https://img.shields.io/npm/types/@dungeonmaster/snaputils)

A lightweight, zero-dependency utility library for JavaScript & React apps.

## Installation

```bash
npm install @dungeonmaster/snaputils
```

## TypeScript Support

This package includes built-in TypeScript type definitions.
No need to install any `@types/` package separately!

\```ts
import { formatCurrency, isLeapYear, capitalize } from '@dungeonmaster/snaputils';

formatCurrency(1999.99, 'USD'); // ✅ autocomplete works
isLeapYear(2024); // ✅ type checked
capitalize('hello'); // ✅ type checked
\```

## Usage

```js
import { capitalize, formatCurrency, timeAgo } from "@dungeonmaster/snaputils";
```

## String Utilities

| Function                        | Description                 | Example                           |
| ------------------------------- | --------------------------- | --------------------------------- |
| `capitalize(str)`               | Capitalize first letter     | `"hello"` → `"Hello"`             |
| `truncate(str, max)`            | Truncate with ellipsis      | `"Hello World"` → `"Hello..."`    |
| `toCamelCase(str)`              | Convert to camelCase        | `"hello world"` → `"helloWorld"`  |
| `maskString(str, start, end)`   | Mask middle characters      | `"1234567890"` → `"12******90"`   |
| `toTitleCase(str)`              | Title case a string         | `"hello world"` → `"Hello World"` |
| `isPalindrome(str)`             | Check if palindrome         | `"racecar"` → `true`              |
| `countOccurrences(str, substr)` | Count substring occurrences | `2`                               |
| `reverseString(str)`            | Reverse a string            | `"hello"` → `"olleh"`             |
| `toTitleCase(str)`              | Title case a string         | `"hello world"` → `"Hello World"` |
| `isPalindrome(str)`             | Check if palindrome         | `"racecar"` → `true`              |
| `countOccurrences(str, substr)` | Count substring occurrences | `2`                               |
| `reverseString(str)`            | Reverse a string            | `"hello"` → `"olleh"`             |
| `wordCount(str)`                | Count words                 | `"hello world"` → `2`             |

## Number & Currency Utilities

| Function                                   | Description                   | Example                      |
| ------------------------------------------ | ----------------------------- | ---------------------------- |
| `formatCurrency(amount, currency, locale)` | Format as currency            | `1999.99` → `"$1,999.99"`    |
| `formatNumber(num)`                        | Add thousand separators       | `1000000` → `"1,000,000"`    |
| `formatPercent(value)`                     | Format as percentage          | `0.75` → `"75.0%"`           |
| `abbreviateNumber(num)`                    | Shorten large numbers         | `1500000` → `"1.5M"`         |
| `roundTo(num, decimals)`                   | Round to decimal places       | `3.14159` → `3.14`           |
| `isEven(num)`                              | Check if even                 | `4` → `true`                 |
| `isOdd(num)`                               | Check if odd                  | `3` → `true`                 |
| `randomBetween(min, max)`                  | Random number in range        | `randomBetween(1, 10)` → `7` |
| `formatFileSize(bytes)`                    | Format bytes to readable size | `1024` → `"1.00 KB"`         |
| `isEven(num)`                              | Check if even                 | `4` → `true`                 |
| `isOdd(num)`                               | Check if odd                  | `3` → `true`                 |
| `randomBetween(min, max)`                  | Random number in range        | `7`                          |
| `formatFileSize(bytes)`                    | Format bytes to readable      | `1024` → `"1.00 KB"`         |

## Date & Time Utilities

| Function                | Description              | Example              |
| ----------------------- | ------------------------ | -------------------- |
| `formatDate(date)`      | Full date string         | `"January 15, 2024"` |
| `formatShortDate(date)` | MM/DD/YYYY format        | `"01/15/2024"`       |
| `formatTime(date)`      | 12-hour time             | `"02:30 PM"`         |
| `timeAgo(date)`         | Relative time            | `"2 hours ago"`      |
| `daysBetween(d1, d2)`   | Days between dates       | `10`                 |
| `addDays(date, days)`   | Add days to date         | Returns new `Date`   |
| `isWeekend(date)`       | Check if date is weekend | `true / false`       |
| `isLeapYear(year)`      | Check if leap year       | `2024` → `true`      |
| `getDayName(date)`      | Get day name             | `"Monday"`           |
| `getMonthName(date)`    | Get month name           | `"January"`          |
| `isToday(date)`         | Check if date is today   | `true / false`       |
| `isWeekend(date)`       | Check if date is weekend | `true / false`       |
| `isLeapYear(year)`      | Check if leap year       | `2024` → `true`      |
| `getDayName(date)`      | Get day name             | `"Monday"`           |
| `getMonthName(date)`    | Get month name           | `"January"`          |

## License

MIT
