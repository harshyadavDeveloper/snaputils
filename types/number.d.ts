export function formatCurrency(amount: number, currency?: string, locale?: string): string;

export function formatNumber(num: number, locale?: string): string;

export function formatPercent(value: number, decimals?: number): string;

export function abbreviateNumber(num: number, decimals?: number): string;

export function roundTo(num: number, decimals?: number): number;

export function isEven(num: number): boolean;

export function isOdd(num: number): boolean;

export function randomBetween(min: number, max: number): number;

export function formatFileSize(bytes: number): string;