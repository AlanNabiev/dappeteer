import { BrowserLaunchArgumentOptions, Page } from 'puppeteer';
import { Path } from './setup/metamaskDownloader';
import { RECOMMENDED_METAMASK_VERSION } from './index';
export declare type LaunchOptions = OfficialOptions | CustomOptions;
declare type DappaterBrowserLaunchArgumentOptions = Omit<BrowserLaunchArgumentOptions, 'headless'>;
export declare type OfficialOptions = DappaterBrowserLaunchArgumentOptions & {
    metamaskVersion: typeof RECOMMENDED_METAMASK_VERSION | 'latest' | string;
    metamaskLocation?: Path;
};
export declare type CustomOptions = DappaterBrowserLaunchArgumentOptions & {
    metamaskVersion?: string;
    metamaskPath: string;
};
export declare type MetamaskOptions = {
    seed?: string;
    password?: string;
    showTestNets?: boolean;
};
export declare type AddNetwork = {
    networkName: string;
    rpc: string;
    chainId: number;
    symbol: string;
};
export declare type AddToken = {
    tokenAddress: string;
    symbol?: string;
    decimals?: number;
};
export declare type TransactionOptions = {
    gas?: number;
    gasLimit?: number;
    priority?: number;
};
export declare type Dappeteer = {
    lock: () => Promise<void>;
    unlock: (password: string) => Promise<void>;
    addNetwork: (options: AddNetwork) => Promise<void>;
    addToken: (options: AddToken) => Promise<void>;
    importPK: (pk: string) => Promise<void>;
    switchAccount: (accountNumber: number) => Promise<void>;
    switchNetwork: (network: string) => Promise<void>;
    approveAndAddNetwork: (network: string) => Promise<void>;
    confirmTransaction: (options?: TransactionOptions) => Promise<void>;
    sign: () => Promise<void>;
    approve: () => Promise<void>;
    helpers: {
        getTokenBalance: (tokenSymbol: string) => Promise<number>;
        deleteAccount: (accountNumber: number) => Promise<void>;
        deleteNetwork: (name: string) => Promise<void>;
    };
    page: Page;
};
export {};
