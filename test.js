import { capitalize, truncate, maskString, toCamelCase } from "./src/string.js";
import { formatCurrency, formatPercent, abbreviateNumber, roundTo } from "./src/number.js";
import { formatDate, formatShortDate, timeAgo, daysBetween, addDays } from "./src/date.js";

// --- String ---
console.log("=== String ===");
console.log(capitalize("hello world"));         // Hello world
console.log(truncate("Hello World everyone", 10)); // Hello W...
console.log(maskString("1234567890", 2, 2));    // 12******90
console.log(toCamelCase("hello world foo"));    // helloWorldFoo

// --- Number ---
console.log("=== Number ===");
console.log(formatCurrency(1999.99, "USD"));    // $1,999.99
console.log(formatCurrency(1999.99, "INR", "en-IN")); // ₹1,999.99
console.log(formatPercent(0.856, 2));           // 85.60%
console.log(abbreviateNumber(2_500_000));       // 2.5M
console.log(roundTo(3.14159, 2));               // 3.14

// --- Date ---
console.log("=== Date ===");
console.log(formatDate("2024-01-15"));          // January 15, 2024
console.log(formatShortDate("2024-01-15"));     // 01/15/2024
console.log(timeAgo(new Date(Date.now() - 3600000))); // 1 hour ago
console.log(daysBetween("2024-01-01", "2024-01-11")); // 10
console.log(addDays("2024-01-01", 5));          // 2024-01-06