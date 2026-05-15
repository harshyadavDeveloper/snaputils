# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
