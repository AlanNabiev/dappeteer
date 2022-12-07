import { Page } from 'puppeteer';
export declare const clickOnSettingsSwitch: (page: Page, text: string) => Promise<void>;
export declare const openNetworkDropdown: (page: Page) => Promise<void>;
export declare const openProfileDropdown: (page: Page) => Promise<void>;
export declare const openAccountDropdown: (page: Page) => Promise<void>;
export declare const clickOnElement: (page: Page, text: string, type?: string) => Promise<void>;
export declare const clickOnButton: (page: Page, selector: string) => Promise<void>;
export declare const clickOnLogo: (page: Page) => Promise<void>;
/**
 *
 * @param page
 * @param label
 * @param text
 * @param clear
 * @param excludeSpan
 * @param optional
 * @returns true if found and updated, false otherwise
 */
export declare const typeOnInputField: (page: Page, label: string, text: string, clear?: boolean, excludeSpan?: boolean, optional?: boolean) => Promise<boolean>;
export declare const typeOnInputFieldBySelector: (page: Page, selector: string, text: string) => Promise<void>;
