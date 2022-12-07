import { Page } from 'puppeteer';
export declare const deleteAccount: (page: Page, version?: string) => (accountNumber: number) => Promise<void>;
