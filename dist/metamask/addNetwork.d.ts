import { Page } from 'puppeteer';
import { AddNetwork } from '../index';
export declare const addNetwork: (page: Page, version?: string) => ({ networkName, rpc, chainId, symbol, }: AddNetwork) => Promise<void>;
