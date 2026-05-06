export function unique<T>(arr: T[]): T[];
export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]>;
export function chunk<T>(arr: T[], size: number): T[][];