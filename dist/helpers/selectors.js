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
exports.getAccountMenuButton = exports.getErrorMessage = exports.getSettingsSwitch = exports.getInputByLabel = exports.getElementByContent = void 0;
// TODO: change text() with '.';
const getElementByContent = (page, text, type = '*') => page.waitForXPath(`//${type}[contains(text(), '${text}')]`);
exports.getElementByContent = getElementByContent;
const getInputByLabel = (page, text, excludeSpan = false, timeout = 1000) => page.waitForXPath([
    `//label[contains(.,'${text}')]/following-sibling::textarea`,
    `//label[contains(.,'${text}')]/following-sibling::*//input`,
    `//h6[contains(.,'${text}')]/parent::node()/parent::node()/following-sibling::input`,
    `//h6[contains(.,'${text}')]/parent::node()/parent::node()/following-sibling::*//input`,
    ...(!excludeSpan
        ? [
            `//span[contains(.,'${text}')]/parent::node()/parent::node()/following-sibling::*//input`,
            `//span[contains(.,'${text}')]/following-sibling::*//input`,
        ]
        : []),
].join('|'), { timeout });
exports.getInputByLabel = getInputByLabel;
const getSettingsSwitch = (page, text) => page.waitForXPath([
    `//span[contains(.,'${text}')]/parent::div/following-sibling::div/div/div/div`,
    `//span[contains(.,'${text}')]/parent::div/following-sibling::div/div/label/div`,
].join('|'));
exports.getSettingsSwitch = getSettingsSwitch;
const getErrorMessage = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const options = { timeout: 1000 };
    const errorElement = yield Promise.race([
        page.waitForSelector(`span.error`, options),
        page.waitForSelector(`.typography--color-error-1`, options),
        page.waitForSelector(`.typography--color-error-default`, options),
    ]).catch(() => null);
    if (!errorElement)
        return false;
    return page.evaluate((node) => node.textContent, errorElement);
});
exports.getErrorMessage = getErrorMessage;
const getAccountMenuButton = (page) => page.waitForXPath(`//button[contains(@title,'Account Options')]`);
exports.getAccountMenuButton = getAccountMenuButton;
