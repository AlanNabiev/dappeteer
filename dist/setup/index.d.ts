import puppeteer, { Browser, Page } from 'puppeteer';
import { Dappeteer, MetamaskOptions, OfficialOptions } from '../types';
export * from './launch';
export * from './setupMetamask';
export declare const bootstrap: (puppeteerLib: typeof puppeteer, { seed, password, showTestNets, ...launchOptions }: OfficialOptions & MetamaskOptions) => Promise<[Dappeteer, Page, Browser]>;
