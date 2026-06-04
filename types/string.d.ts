export function capitalize(str: string): string;

export function truncate(str: string, maxLength?: number, suffix?: string): string;

export function toCamelCase(str: string): string;

export function maskString(str: string, visibleStart?: number, visibleEnd?: number, maskChar?: string): string;

export function wordCount(str: string): number;

export function toTitleCase(str: string): string;

export function isPalindrome(str: string): boolean;

export function countOccurrences(str: string, substr: string): number;

export function reverseString(str: string): string;

export function slugify(str: string): string;

export function stripHTML(str: string): string;

export function extractEmails(str: string): string[];

export function extractURLs(str: string): string[];