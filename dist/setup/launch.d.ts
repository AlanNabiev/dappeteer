import puppeteer from 'puppeteer';
import { LaunchOptions } from '../types';
/**
 * Launch Puppeteer chromium instance with MetaMask plugin installed
 * */
export declare function launch(puppeteerLib: typeof puppeteer, options: LaunchOptions): Promise<puppeteer.Browser>;
