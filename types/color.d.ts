export interface RGB {
  r: number;
  g: number;
  b: number;
}

export function hexToRgb(hex: string): RGB | null;
export function rgbToHex(r: number, g: number, b: number): string;
export function isValidHex(hex: string): boolean;
export function lightenColor(hex: string, percent: number): string;
export function darkenColor(hex: string, percent: number): string;