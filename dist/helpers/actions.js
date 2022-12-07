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
exports.typeOnInputFieldBySelector = exports.typeOnInputField = exports.clickOnLogo = exports.clickOnButton = exports.clickOnElement = exports.openAccountDropdown = exports.openProfileDropdown = exports.openNetworkDropdown = exports.clickOnSettingsSwitch = void 0;
const selectors_1 = require("./selectors");
const clickOnSettingsSwitch = (page, text) => __awaiter(void 0, void 0, void 0, function* () {
    const button = yield (0, selectors_1.getSettingsSwitch)(page, text);
    yield button.click();
});
exports.clickOnSettingsSwitch = clickOnSettingsSwitch;
const openNetworkDropdown = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const networkSwitcher = yield page.waitForSelector('.network-display');
    yield networkSwitcher.click();
    yield page.waitForSelector('li.dropdown-menu-item');
});
exports.openNetworkDropdown = openNetworkDropdown;
const openProfileDropdown = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const accountSwitcher = yield page.waitForSelector('.identicon');
    yield accountSwitcher.click();
});
exports.openProfileDropdown = openProfileDropdown;
const openAccountDropdown = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const accMenu = yield (0, selectors_1.getAccountMenuButton)(page);
    yield accMenu.click();
    yield page.waitForSelector('.menu__container.account-options-menu');
});
exports.openAccountDropdown = openAccountDropdown;
const clickOnElement = (page, text, type) => __awaiter(void 0, void 0, void 0, function* () {
    const element = yield (0, selectors_1.getElementByContent)(page, text, type);
    yield element.click();
});
exports.clickOnElement = clickOnElement;
const clickOnButton = (page, selector) => __awaiter(void 0, void 0, void 0, function* () {
    const button = yield page.waitForSelector(selector);
    yield button.click();
});
exports.clickOnButton = clickOnButton;
const clickOnLogo = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const header = yield page.waitForSelector('.app-header__logo-container');
    yield header.click();
});
exports.clickOnLogo = clickOnLogo;
/**
 *
 * @param page
 * @param label
 * @param text
 * @param clear
 * @param excludeSpan
 * @param optional
 * @returns true if found and updated, false otherwise
 */
const typeOnInputField = (page, label, text, clear = false, excludeSpan = false, optional = false) => __awaiter(void 0, void 0, void 0, function* () {
    let input;
    try {
        input = yield (0, selectors_1.getInputByLabel)(page, label, excludeSpan, 1000);
    }
    catch (e) {
        if (optional)
            return false;
        throw e;
    }
    if (clear)
        yield page.evaluate((node) => {
            node.value = '';
        }, input);
    yield input.type(text);
    return true;
});
exports.typeOnInputField = typeOnInputField;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
const typeOnInputFieldBySelector = (page, selector, text) => __awaiter(void 0, void 0, void 0, function* () {
    let input;
    try {
        input = yield page.waitForSelector(selector);
    }
    catch (e) {
        throw new Error(e);
    }
    yield input.type(text);
});
exports.typeOnInputFieldBySelector = typeOnInputFieldBySelector;
