export function unique<T>(arr: T[]): T[];
export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]>;
export function chunk<T>(arr: T[], size: number): T[][];
export function flatten<T>(arr: T[], depth?: number): T[];
export function shuffle<T>(arr: T[]): T[];
export function difference<T>(arr1: T[], arr2: T[]): T[];
export function intersection<T>(arr1: T[], arr2: T[]): T[];