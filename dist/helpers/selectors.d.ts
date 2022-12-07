import { ElementHandle, Page } from 'puppeteer';
export declare const getElementByContent: (page: Page, text: string, type?: string) => Promise<ElementHandle | null>;
export declare const getInputByLabel: (page: Page, text: string, excludeSpan?: boolean, timeout?: number) => Promise<ElementHandle>;
export declare const getSettingsSwitch: (page: Page, text: string) => Promise<ElementHandle | null>;
export declare const getErrorMessage: (page: Page) => Promise<string | false>;
export declare const getAccountMenuButton: (page: Page) => Promise<ElementHandle | null>;
