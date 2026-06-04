// Saves a value to localStorage with JSON serialization
// setItem("user", { name: "Harsh" }) → true
export function setItem(key, value) {
  if (typeof localStorage === "undefined") return false;
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

// Gets a value from localStorage with JSON parsing
// getItem("user") → { name: "Harsh" }
export function getItem(key, defaultValue = null) {
  if (typeof localStorage === "undefined") return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

// Removes a key from localStorage
// removeItem("user") → true
export function removeItem(key) {
  if (typeof localStorage === "undefined") return false;
  try {
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

// Clears all keys from localStorage
// clearAll() → true
export function clearAll() {
  if (typeof localStorage === "undefined") return false;
  try {
    localStorage.clear();
    return true;
  } catch {
    return false;
  }
}

// Returns all keys in localStorage
// getKeys() → ["user", "theme", "language"]
export function getKeys() {
  if (typeof localStorage === "undefined") return [];
  try {
    return Object.keys(localStorage);
  } catch {
    return [];
  }
}
