export function formatDate(date: Date | string | number, locale?: string, options?: Intl.DateTimeFormatOptions): string;

export function formatShortDate(date: Date | string | number): string;

export function timeAgo(date: Date | string | number, locale?: string): string;

export function isToday(date: Date | string | number): boolean;

export function daysBetween(date1: Date | string | number, date2: Date | string | number): number;

export function addDays(date: Date | string | number, days: number): Date;

export function isWeekend(date: Date | string | number): boolean;

export function isLeapYear(year: number): boolean;

export function getDayName(date: Date | string | number, locale?: string): string;

export function getMonthName(date: Date | string | number, locale?: string): string;