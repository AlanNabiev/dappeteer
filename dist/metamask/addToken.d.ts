import { Page } from 'puppeteer';
import { AddToken } from '../index';
export declare const addToken: (page: Page, version?: string) => ({ tokenAddress, symbol, decimals, }: AddToken) => Promise<void>;
