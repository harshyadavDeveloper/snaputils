export interface ParsedURL {
    protocol: string;
    host: string;
    pathname: string;
    search: string;
    hash: string;
    params: Record<string, string>;
}

export function parseURL(url: string): ParsedURL | null;
export function buildQueryString(obj: Record<string, string | number>): string;
export function parseQueryString(str: string): Record<string, string>;