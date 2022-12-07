import { Browser, Page } from 'puppeteer';
import { Dappeteer, MetamaskOptions } from '../types';
/**
 * Setup MetaMask with base account
 * */
declare type Step<Options> = (page: Page, options?: Options) => void;
export declare function setupMetamask<Options = MetamaskOptions>(browser: Browser, options?: Options, steps?: Step<Options>[]): Promise<Dappeteer>;
export {};
