// Detects if the current device is mobile
// isMobile() → true / false
export function isMobile() {
  if (typeof navigator === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

// Copies text to clipboard
// copyToClipboard("hello") → true (success) / false (failure)
export async function copyToClipboard(text) {
  if (typeof navigator === "undefined") return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

// Gets the current scroll position
// getScrollPosition() → { x: 0, y: 200 }
export function getScrollPosition() {
  if (typeof window === "undefined") return { x: 0, y: 0 };
  return {
    x: window.scrollX || window.pageXOffset,
    y: window.scrollY || window.pageYOffset,
  };
}
