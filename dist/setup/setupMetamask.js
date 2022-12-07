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
exports.setupMetamask = void 0;
const metamask_1 = require("../metamask");
const setupActions_1 = require("./setupActions");
const defaultMetamaskSteps = [setupActions_1.confirmWelcomeScreen, setupActions_1.declineAnalytics, setupActions_1.importAccount];
function setupMetamask(browser, options, steps = defaultMetamaskSteps) {
    return __awaiter(this, void 0, void 0, function* () {
        const page = yield closeHomeScreen(browser);
        // goes through the installation steps required by metamask
        for (const step of steps) {
            yield step(page, options);
        }
        return (0, metamask_1.getMetamask)(page);
    });
}
exports.setupMetamask = setupMetamask;
function closeHomeScreen(browser) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            browser.on('targetcreated', (target) => __awaiter(this, void 0, void 0, function* () {
                if (target.url().match('chrome-extension://[a-z]+/home.html')) {
                    try {
                        const page = yield target.page();
                        resolve(page);
                    }
                    catch (e) {
                        reject(e);
                    }
                }
            }));
        });
    });
}
