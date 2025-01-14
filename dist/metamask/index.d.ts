import { Browser, Page } from 'puppeteer';
import { Dappeteer } from '..';
export declare type SetSignedIn = (state: boolean) => Promise<void>;
export declare type GetSingedIn = () => Promise<boolean>;
export declare const getMetamask: (page: Page, version?: string) => Promise<Dappeteer>;
/**
 * Return MetaMask instance
 * */
export declare function getMetamaskWindow(browser: Browser, version?: string): Promise<Dappeteer>;
