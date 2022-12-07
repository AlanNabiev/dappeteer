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
exports.closePopup = exports.importAccount = exports.declineAnalytics = exports.confirmWelcomeScreen = exports.showTestNets = void 0;
const helpers_1 = require("../helpers");
function showTestNets(metamaskPage) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, helpers_1.openNetworkDropdown)(metamaskPage);
        yield (0, helpers_1.clickOnElement)(metamaskPage, 'Show/hide');
        yield (0, helpers_1.clickOnSettingsSwitch)(metamaskPage, 'Show test networks');
        yield (0, helpers_1.clickOnLogo)(metamaskPage);
    });
}
exports.showTestNets = showTestNets;
function confirmWelcomeScreen(metamaskPage) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, helpers_1.clickOnButton)(metamaskPage, '.first-time-flow__button');
    });
}
exports.confirmWelcomeScreen = confirmWelcomeScreen;
function declineAnalytics(metamaskPage) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, helpers_1.clickOnButton)(metamaskPage, '[data-testid="page-container-footer-cancel"]');
    });
}
exports.declineAnalytics = declineAnalytics;
function importAccount(metamaskPage, { seed = 'already turtle birth enroll since owner keep patch skirt drift any dinner', password = 'password1234', }) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, helpers_1.clickOnButton)(metamaskPage, '[data-testid="import-wallet-button"]');
        for (const [index, seedPart] of seed.split(' ').entries())
            yield (0, helpers_1.typeOnInputField)(metamaskPage, `${index + 1}.`, seedPart);
        yield (0, helpers_1.typeOnInputFieldBySelector)(metamaskPage, '#password', password);
        yield (0, helpers_1.typeOnInputFieldBySelector)(metamaskPage, '#confirm-password', password);
        // select checkbox "I have read and agree to the"
        const acceptTerms = yield metamaskPage.waitForSelector('.create-new-vault__terms-label');
        yield acceptTerms.click();
        yield (0, helpers_1.clickOnButton)(metamaskPage, '.create-new-vault__submit-button');
        yield (0, helpers_1.clickOnButton)(metamaskPage, '[data-testid="EOF-complete-button"]');
    });
}
exports.importAccount = importAccount;
const closePopup = (page) => __awaiter(void 0, void 0, void 0, function* () {
    /* For some reason popup deletes close button and then create new one (react stuff)
     * hacky solution can be found here => https://github.com/puppeteer/puppeteer/issues/3496 */
    yield new Promise((resolve) => setTimeout(resolve, 1000));
    yield page.$eval('.popover-header__button', (node) => node.click());
});
exports.closePopup = closePopup;
