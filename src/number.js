// Formats a number as currency
// formatCurrency(1999.99, "USD") → "$1,999.99"
// formatCurrency(1999.99, "INR", "en-IN") → "₹1,999.99"
export function formatCurrency(amount, currency = "USD", locale = "en-US") {
  if (isNaN(amount)) return "";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

// Formats a number with thousand separators
// formatNumber(1000000) → "1,000,000"
export function formatNumber(num, locale = "en-US") {
  if (isNaN(num)) return "";
  return new Intl.NumberFormat(locale).format(num);
}

// Formats a number as a percentage
// formatPercent(0.75) → "75.0%"
export function formatPercent(value, decimals = 1) {
  if (isNaN(value)) return "";
  return `${(value * 100).toFixed(decimals)}%`;
}

// Abbreviates large numbers
// abbreviateNumber(1500) → "1.5K"
// abbreviateNumber(2000000) → "2.0M"
export function abbreviateNumber(num, decimals = 1) {
  if (isNaN(num)) return "";
  const abs = Math.abs(num);
  const sign = num < 0 ? "-" : "";
  if (abs >= 1_000_000_000) return `${sign}${(abs / 1_000_000_000).toFixed(decimals)}B`;
  if (abs >= 1_000_000) return `${sign}${(abs / 1_000_000).toFixed(decimals)}M`;
  if (abs >= 1_000) return `${sign}${(abs / 1_000).toFixed(decimals)}K`;
  return `${sign}${abs}`;
}

// Rounds a number to given decimal places
// roundTo(3.14159, 2) → 3.14
export function roundTo(num, decimals = 2) {
  if (isNaN(num)) return NaN;
  return Math.round(num * 10 ** decimals) / 10 ** decimals;
}