// Formats a date to a readable string
// formatDate("2024-01-15") → "January 15, 2024"
export function formatDate(date, locale = "en-US", options = { year: "numeric", month: "long", day: "numeric" }) {
  const d = new Date(date);
  if (isNaN(d)) return "Invalid date";
  return new Intl.DateTimeFormat(locale, options).format(d);
}

// Formats a date to MM/DD/YYYY
// formatShortDate("2024-01-15") → "01/15/2024"
export function formatShortDate(date) {
  const d = new Date(date);
  if (isNaN(d)) return "Invalid date";
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
}

// Returns a relative time string
// timeAgo(someDate) → "2 hours ago" or "in 3 days"
export function timeAgo(date, locale = "en-US") {
  const d = new Date(date);
  if (isNaN(d)) return "Invalid date";
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const diffMs = d - Date.now();
  const diffSecs = Math.round(diffMs / 1000);
  const diffMins = Math.round(diffSecs / 60);
  const diffHours = Math.round(diffMins / 60);
  const diffDays = Math.round(diffHours / 24);
  const diffWeeks = Math.round(diffDays / 7);
  const diffMonths = Math.round(diffDays / 30);
  const diffYears = Math.round(diffDays / 365);

  if (Math.abs(diffSecs) < 60) return rtf.format(diffSecs, "second");
  if (Math.abs(diffMins) < 60) return rtf.format(diffMins, "minute");
  if (Math.abs(diffHours) < 24) return rtf.format(diffHours, "hour");
  if (Math.abs(diffDays) < 7) return rtf.format(diffDays, "day");
  if (Math.abs(diffWeeks) < 5) return rtf.format(diffWeeks, "week");
  if (Math.abs(diffMonths) < 12) return rtf.format(diffMonths, "month");
  return rtf.format(diffYears, "year");
}

// Returns the number of days between two dates
// daysBetween("2024-01-01", "2024-01-11") → 10
export function daysBetween(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffMs = Math.abs(d2 - d1);
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

// Adds days to a date and returns a new Date
// addDays("2024-01-01", 5) → Date(2024-01-06)
export function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}