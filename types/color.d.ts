export interface RGB {
  r: number;
  g: number;
  b: number;
}
export interface HSL {
  h: number;
  s: number;
  l: number;
}

export function hexToRgb(hex: string): RGB | null;
export function rgbToHex(r: number, g: number, b: number): string;
export function isValidHex(hex: string): boolean;
export function lightenColor(hex: string, percent: number): string;
export function darkenColor(hex: string, percent: number): string;
export function generateRandomColor(): string;
export function getContrastColor(hex: string): string;
export function hexToHsl(hex: string): HSL | null;
export function hslToHex(h: number, s: number, l: number): string;