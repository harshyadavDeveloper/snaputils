export function omit<T extends object>(obj: T, keys: string[]): Partial<T>;
export function pick<T extends object>(obj: T, keys: string[]): Partial<T>;
export function deepClone<T>(obj: T): T;