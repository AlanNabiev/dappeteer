import { LaunchOptions } from '../types';
import { DappateerJestConfig } from './global';
export declare const DAPPETEER_DEFAULT_CONFIG: LaunchOptions;
export declare function getDappeteerConfig(): Promise<DappateerJestConfig>;
