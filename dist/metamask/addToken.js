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
exports.addToken = void 0;
const helpers_1 = require("../helpers");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addToken = (page, version) => ({ tokenAddress, symbol, decimals = 0, }) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.bringToFront();
    yield (0, helpers_1.clickOnElement)(page, 'Import tokens');
    yield (0, helpers_1.typeOnInputField)(page, 'Token Contract Address', tokenAddress);
    // wait to metamask pull token data
    // TODO: handle case when contract is not containing symbol
    const symbolInput = yield (0, helpers_1.getInputByLabel)(page, 'Token Symbol');
    yield page.waitForFunction((node) => !!node.value, {}, symbolInput);
    if (symbol) {
        yield (0, helpers_1.clickOnElement)(page, 'Edit');
        yield (0, helpers_1.typeOnInputField)(page, 'Token Symbol', symbol, true);
    }
    const decimalsInput = yield (0, helpers_1.getInputByLabel)(page, 'Token Decimal');
    const isDisabled = yield page.evaluate((node) => node.disabled, decimalsInput);
    if (!isDisabled)
        yield decimalsInput.type(String(decimals));
    yield (0, helpers_1.clickOnButton)(page, 'Add Custom Token');
    yield (0, helpers_1.clickOnButton)(page, 'Import Tokens');
});
exports.addToken = addToken;
