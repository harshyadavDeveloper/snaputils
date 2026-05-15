// Parses a URL into its parts
// parseURL("https://example.com/path?foo=bar") →
// { protocol, host, pathname, search, hash, params }
export function parseURL(url) {
  try {
    const u = new URL(url);
    return {
      protocol: u.protocol,
      host: u.host,
      pathname: u.pathname,
      search: u.search,
      hash: u.hash,
      params: Object.fromEntries(u.searchParams.entries()),
    };
  } catch {
    return null;
  }
}

// Converts an object to a query string
// buildQueryString({ name: "harsh", age: 25 }) → "name=harsh&age=25"
export function buildQueryString(obj) {
  if (!obj || typeof obj !== "object") return "";
  return Object.entries(obj)
    .map(
      ([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`,
    )
    .join("&");
}

// Parses a query string into an object
// parseQueryString("name=harsh&age=25") → { name: "harsh", age: "25" }
export function parseQueryString(str) {
  if (!str || typeof str !== "string") return {};
  return Object.fromEntries(
    str
      .replace(/^\?/, "")
      .split("&")
      .filter(Boolean)
      .map((pair) => {
        const [key, val] = pair.split("=");
        return [decodeURIComponent(key), decodeURIComponent(val ?? "")];
      }),
  );
}
