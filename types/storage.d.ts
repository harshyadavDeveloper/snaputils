export function setItem(key: string, value: any): boolean;
export function getItem<T>(key: string, defaultValue?: T): T | null;
export function removeItem(key: string): boolean;
export function clearAll(): boolean;
export function getKeys(): string[];