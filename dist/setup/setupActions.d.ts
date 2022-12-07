import { Page } from 'puppeteer';
import { MetamaskOptions } from '../types';
export declare function showTestNets(metamaskPage: Page): Promise<void>;
export declare function confirmWelcomeScreen(metamaskPage: Page): Promise<void>;
export declare function declineAnalytics(metamaskPage: Page): Promise<void>;
export declare function importAccount(metamaskPage: Page, { seed, password, }: MetamaskOptions): Promise<void>;
export declare const closePopup: (page: Page) => Promise<void>;
