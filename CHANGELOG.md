# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.8.5] - 2026-05-22

### Improved

- `memoize` — added `maxSize` option to prevent memory leaks
- `truncate` — added `position` option (start, middle, end) and custom `suffix`
- `formatDate` — added preset options (short, long, full, numeric)
- `getContrastColor` — now accepts hex, RGB object and HSL object
- `maskString` — added `maskChar` and `reveal` options
- `randomBetween` — added `float`, `decimals` and `exclude` options
- `groupBy` — now accepts a function as the key in addition to a string
- `debounce` — added `immediate` option to fire on leading edge
- `deepClone` — now supports Date, Map, Set and circular references
- `parseURL` — added `segments`, `port`, `origin` and `isAbsolute` fields
- `formatCurrency` — added `compact` and `decimals` options
- `isStrongPassword` — now returns detailed error feedback object
- `chunk` — added `fill` and `balanced` options
- `hashString` — added `djb2`, `sdbm` and `lose` algorithm options

## [1.8.0] - 2026-05-15

### Added

- `generateOTP`, `encryptString`, `decryptString` security utilities
- `generateRandomColor`, `getContrastColor`, `hexToHsl`, `hslToHex` color utilities
- `percentage`, `lerp`, `degreesToRadians`, `radiansToDegrees` math utilities
- `generatePassword`, `initials`, `pluralize` string utilities
- TypeScript type definitions for all new utilities
- Jest tests for all new utilities

## [1.7.0] - 2026-05-15

### Added

- `useDebounce`, `useLocalStorage`, `useMediaQuery`, `useOnClickOutside`, `useCopyToClipboard` React hooks
- `isStrongPassword`, `isUsername`, `isCreditCard`, `isPostalCode`, `isIPAddress` form validation
- `setItem`, `getItem`, `removeItem`, `clearAll`, `getKeys` storage utilities
- `slugify`, `stripHTML`, `extractEmails`, `extractURLs` string utilities
- `flatten`, `shuffle`, `difference`, `intersection` array utilities
- TypeScript type definitions for all new utilities
- Jest tests for all new utilities

## [1.6.0] - 2026-05-15

### Added

- `generateUID`, `hashString`, `base64Encode`, `base64Decode` security utilities
- `isMobile`, `copyToClipboard`, `getScrollPosition` device utilities
- `sum`, `average`, `median`, `factorial`, `min`, `max` math utilities
- `parseURL`, `buildQueryString`, `parseQueryString` URL utilities
- `debounce`, `throttle`, `memoize` performance utilities
- TypeScript type definitions for all new utilities
- Jest tests for all new utilities

## [1.5.2] - 2026-05-09

### Fixed

- CI/CD pipeline now uses OIDC Trusted Publishing
- Removed npm token dependency for publishing

## [1.5.1] - 2026-05-06

### Added

- Live demo link in README
- Demo source code link in README

## [1.5.0] - 2026-05-06

### Added

- `isEmail`, `isURL`, `isPhoneNumber` validation utilities
- `unique`, `groupBy`, `chunk` array utilities
- `omit`, `pick`, `deepClone` object utilities
- `hexToRgb`, `rgbToHex`, `isValidHex`, `lightenColor`, `darkenColor` color utilities
- TypeScript type definitions for all new utilities
- Jest tests for all new utilities

## [1.4.0] - 2026-05-06

### Added

- TypeScript type definitions for all utility functions
- `wordCount` to string utilities
- `isToday` to date utilities

## [1.3.1] - 2026-05-02

### Added

- Jest unit tests for all utilities (68 tests)
- `testMatch` config to restrict Jest to `tests/` folder

## [1.3.0] - 2026-05-02

### Added

- `isWeekend`, `isLeapYear`, `getDayName`, `getMonthName` to date utilities
- `isEven`, `isOdd`, `randomBetween`, `formatFileSize` to number utilities
- `toTitleCase`, `isPalindrome`, `countOccurrences`, `reverseString` to string utilities

## [1.2.1] - 2026-05-02

### Added

- README with full API documentation
- GitHub Actions workflow for automated publishing

## [1.2.0] - 2026-05-02

### Added

- Initial release with string, number and date utilities
- Rollup bundler setup with CJS and ESM output
