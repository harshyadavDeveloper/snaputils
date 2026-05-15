export function debounce<T extends (...args: any[]) => any>(fn: T, delay?: number): (...args: Parameters<T>) => void;
export function throttle<T extends (...args: any[]) => any>(fn: T, limit?: number): (...args: Parameters<T>) => void;
export function memoize<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T>;