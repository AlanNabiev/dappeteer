import { Browser, Page } from 'puppeteer';
import { Dappeteer, LaunchOptions, MetamaskOptions } from '..';
declare global {
    namespace NodeJS {
        interface Global {
            page: Page;
            browser: Browser;
            metamask: Dappeteer;
        }
    }
}
export declare type DappateerJestConfig = Partial<{
    dappeteer: LaunchOptions;
    metamask: MetamaskOptions;
}>;
