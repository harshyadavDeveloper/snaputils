// Parses a URL into its parts with extra helpers
// parseURL("https://example.com/path/to/page?foo=bar#section")
export function parseURL(url) {
  try {
    const u = new URL(url);
    return {
      protocol: u.protocol,
      host: u.host,
      hostname: u.hostname,
      port: u.port || null,
      pathname: u.pathname,
      search: u.search,
      hash: u.hash,
      params: Object.fromEntries(u.searchParams.entries()),
      segments: u.pathname.split("/").filter(Boolean),
      isAbsolute: true,
      origin: u.origin,
    };
  } catch {
    // handle relative URLs
    if (typeof url === "string" && url.startsWith("/")) {
      return {
        protocol: null,
        host: null,
        hostname: null,
        port: null,
        pathname: url.split("?")[0],
        search: url.includes("?") ? "?" + url.split("?")[1] : "",
        hash: url.includes("#") ? "#" + url.split("#")[1] : "",
        params: url.includes("?")
          ? Object.fromEntries(new URLSearchParams(url.split("?")[1]).entries())
          : {},
        segments: url.split("?")[0].split("/").filter(Boolean),
        isAbsolute: false,
        origin: null,
      };
    }
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
