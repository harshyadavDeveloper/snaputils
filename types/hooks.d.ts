export function useDebounce<T>(value: T, delay?: number): T;
export function useLocalStorage<T>(key: string, defaultValue: T): [T, (value: T) => void];
export function useMediaQuery(query: string): boolean;
export function useOnClickOutside(ref: React.RefObject<HTMLElement>, handler: (event: Event) => void): void;
export function useCopyToClipboard(): [boolean, (text: string) => Promise<boolean>];