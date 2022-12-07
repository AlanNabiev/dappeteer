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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMetamaskWindow = exports.getMetamask = void 0;
const addNetwork_1 = require("./addNetwork");
const addToken_1 = require("./addToken");
const approve_1 = require("./approve");
const confirmTransaction_1 = require("./confirmTransaction");
const helpers_1 = require("./helpers");
const importPk_1 = require("./importPk");
const lock_1 = require("./lock");
const next_1 = require("./next");
const sign_1 = require("./sign");
const switchAccount_1 = require("./switchAccount");
const switchNetwork_1 = require("./switchNetwork");
const unlock_1 = require("./unlock");
const getMetamask = (page, version) => __awaiter(void 0, void 0, void 0, function* () {
    // modified window object to kep state between tests
    const setSignedIn = (state) => __awaiter(void 0, void 0, void 0, function* () {
        yield page.evaluate((s) => {
            window.signedIn = s;
        }, state);
    });
    const getSingedIn = () => page.evaluate(() => window.signedIn !== undefined
        ? window.signedIn
        : true);
    return {
        addNetwork: (0, addNetwork_1.addNetwork)(page, version),
        approve: (0, approve_1.approve)(page, version),
        confirmTransaction: (0, confirmTransaction_1.confirmTransaction)(page, getSingedIn, version),
        importPK: (0, importPk_1.importPk)(page, version),
        lock: (0, lock_1.lock)(page, setSignedIn, getSingedIn, version),
        sign: (0, sign_1.sign)(page, getSingedIn, version),
        switchAccount: (0, switchAccount_1.switchAccount)(page, version),
        switchNetwork: (0, switchNetwork_1.switchNetwork)(page, version),
        unlock: (0, unlock_1.unlock)(page, setSignedIn, getSingedIn, version),
        addToken: (0, addToken_1.addToken)(page),
        approveAndAddNetwork: (0, next_1.approveAndAddNetwork)(page, version),
        helpers: {
            getTokenBalance: (0, helpers_1.getTokenBalance)(page),
            deleteAccount: (0, helpers_1.deleteAccount)(page),
            deleteNetwork: (0, helpers_1.deleteNetwork)(page),
        },
        page,
    };
});
exports.getMetamask = getMetamask;
/**
 * Return MetaMask instance
 * */
function getMetamaskWindow(browser, version) {
    return __awaiter(this, void 0, void 0, function* () {
        const metamaskPage = yield new Promise((resolve) => {
            browser.pages().then((pages) => {
                for (const page of pages) {
                    if (page.url().includes('chrome-extension'))
                        resolve(page);
                }
            });
        });
        return (0, exports.getMetamask)(metamaskPage, version);
    });
}
exports.getMetamaskWindow = getMetamaskWindow;
