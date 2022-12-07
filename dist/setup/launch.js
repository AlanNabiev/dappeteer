"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.launch = void 0;
const index_1 = require("../index");
const isNewerVersion_1 = require("./isNewerVersion");
const metamaskDownloader_1 = __importDefault(require("./metamaskDownloader"));
/**
 * Launch Puppeteer chromium instance with MetaMask plugin installed
 * */
function launch(puppeteerLib, options) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!options || (!options.metamaskVersion && !options.metamaskPath))
            throw new Error(`Pleas provide "metamaskVersion" (recommended "${index_1.RECOMMENDED_METAMASK_VERSION}" or "latest" to always get latest release of MetaMask)`);
        const { args } = options, rest = __rest(options, ["args"]);
        // eslint-disable-next-line @typescript-eslint/naming-convention
        let METAMASK_PATH;
        if (options.metamaskVersion) {
            const { metamaskVersion, metamaskLocation } = rest;
            /* eslint-disable no-console */
            console.log(); // new line
            if (metamaskVersion === 'latest')
                console.warn('\x1b[33m%s\x1b[0m', `It is not recommended to run metamask with "latest" version. Use it at your own risk or set to the recommended version "${index_1.RECOMMENDED_METAMASK_VERSION}".`);
            else if ((0, isNewerVersion_1.isNewerVersion)(index_1.RECOMMENDED_METAMASK_VERSION, metamaskVersion))
                console.warn('\x1b[33m%s\x1b[0m', `Seems you are running newer version of MetaMask that recommended by dappeteer team.
      Use it at your own risk or set to the recommended version "${index_1.RECOMMENDED_METAMASK_VERSION}".`);
            else if ((0, isNewerVersion_1.isNewerVersion)(metamaskVersion, index_1.RECOMMENDED_METAMASK_VERSION))
                console.warn('\x1b[33m%s\x1b[0m', `Seems you are running older version of MetaMask that recommended by dappeteer team.
      Use it at your own risk or set the recommended version "${index_1.RECOMMENDED_METAMASK_VERSION}".`);
            else
                console.log(`Running tests on MetaMask version ${metamaskVersion}`);
            console.log(); // new line
            METAMASK_PATH = yield (0, metamaskDownloader_1.default)(metamaskVersion, metamaskLocation);
        }
        else {
            console.log(`Running tests on local MetaMask build`);
            METAMASK_PATH = rest.metamaskPath;
            /* eslint-enable no-console */
        }
        return puppeteerLib.launch(Object.assign({ headless: false, args: [`--disable-extensions-except=${METAMASK_PATH}`, `--load-extension=${METAMASK_PATH}`, ...(args || [])] }, rest));
    });
}
exports.launch = launch;
